# 🧠 Vantage — Psychology Learning Platform

Vantage is a web-based psychology learning platform that offers structured courses, interactive lessons, quizzes, and progress tracking.  
It’s designed to make psychology education **accessible, engaging, and easy to follow**.

---

## 🚀 Features

### 🔐 Authentication (Supabase)
- Email + password signup/login
- Username support

### 📚 Courses & Lessons
- Multiple psychology subjects
- Lesson formats: video, article, quiz

<img width="1287" height="689" alt="Screenshot 2026-03-20 195651" src="https://github.com/user-attachments/assets/12ef67c2-8b69-416b-9cfc-571c280d3bcb" />

### 🧩 Interactive Quizzes
- Instant feedback
- Hints + explanations
- 
<img width="986" height="682" alt="Screenshot 2026-03-20 195943" src="https://github.com/user-attachments/assets/8b2d72e4-586b-459c-aaff-a51b3d018567" />

### 📈 Progress Tracking
- Lesson completion
- Course completion
- Daily streaks
  
<img width="1313" height="670" alt="Screenshot 2026-03-20 195838" src="https://github.com/user-attachments/assets/175abcdc-95b1-47b7-8e55-35a2bda214f5" />

### 🏠 Personalized Home
- “Continue Learning”
- Progress stats
- Fun fact system

<img width="1167" height="835" alt="Screenshot 2026-03-20 195442" src="https://github.com/user-attachments/assets/86b2fcee-baeb-4794-91a3-3334af5dca59" />

### 🎨 Themes
- Dark / Light / System theme toggle
  
<img width="1008" height="715" alt="Screenshot 2026-03-20 200058" src="https://github.com/user-attachments/assets/b6c68947-4fcf-4a24-9ced-62bccdfc5d3e" />

---

## 🛠 Tech Stack

- **Frontend:** React + TypeScript (Vite)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide
- **Auth & Database:** Supabase
- **State/Data:** LocalStorage + Supabase

---

## ⚙️ Getting Started

### 1️⃣ Install dependencies
```bash
npm install
```

**2️⃣ Add environment variables**

Create a .env.local file:
```bash
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

**3️⃣ Create the profiles table**
```bash
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  created_at timestamp with time zone default now()
);

alter table profiles enable row level security;

create policy "Users can insert their profile"
on profiles for insert
with check (auth.uid() = id);

create policy "Users can read their profile"
on profiles for select
using (auth.uid() = id);

create policy "Users can update their profile"
on profiles for update
using (auth.uid() = id);
```

**4️⃣ Create profile trigger**
```bash
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.raw_user_meta_data->>'username');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
```

**▶️ Run the project**
```bash
npm run dev
```
**Visit: http://localhost:5173**

### 📝 Notes

* Progress is stored locally using localStorage
* Supabase handles authentication and profiles
* Email confirmation can be disabled if rate limits occur

### ⭐ Future Improvements

* Cloud-based progress syncing
* More quiz types
* Social / leaderboard features
* Mobile optimization
