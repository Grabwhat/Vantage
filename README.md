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

### 🧩 Interactive Quizzes
- Instant feedback
- Hints + explanations

### 📈 Progress Tracking
- Lesson completion
- Course completion
- Daily streaks

### 🏠 Personalized Home
- “Continue Learning”
- Progress stats
- Fun fact system

### 🎨 Themes
- Dark / Light / System theme toggle

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
