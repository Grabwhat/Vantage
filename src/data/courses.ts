export interface Subject {
  id: string;
  name: string;
  shortName?: string;
  icon: string;
  description: string;
  color: string;
}

export interface Course {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  level: string;
  lessons: Lesson[];
}

export interface LessonComponent {
  id: string;
  title: string;
  duration: string;
  type: "video" | "practice" | "article";
  videoUrl?: string;
  content?: string;
  articleContent?: string;
  questions?: Question[];
}

export interface Lesson {
  id: string;
  title: string;
  components: LessonComponent[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint?: string;
}

export const subjects: Subject[] = [
  
  {
    id: "clinical-mental-health",
    name: "Clinical & Mental Health Psychology",
    shortName: "Clinical",
    icon: "Heart",
    description: "Mental health, therapy approaches, and psychological disorders",
    color: "bg-green-500",
  },
  {
    id: "business-marketing",
    name: "Business & Marketing Psychology",
    shortName: "Business",
    icon: "TrendingUp",
    description: "Consumer behavior, persuasion, and marketing strategies",
    color: "bg-blue-500",
  },
  {
    id: "organizational-workplace",
    name: "Organizational / Workplace Psychology",
    shortName: "Org",
    icon: "Briefcase",
    description: "Leadership, team dynamics, and workplace productivity",
    color: "bg-purple-500",
  },
  {
    id: "educational-psychology",
    name: "Educational Psychology",
    shortName: "Edu",
    icon: "GraduationCap",
    description: "Learning theory, memory, and motivation in educational settings",
    color: "bg-yellow-500",
  },
  {
    id: "sports-psychology",
    name: "Sports Psychology",
    shortName: "Sports",
    icon: "Trophy",
    description: "Performance, mental conditioning, and athlete development",
    color: "bg-red-500",
  },
  {
    id: "forensic-psychology",
    name: "Forensic Psychology",
    shortName: "Forensic",
    icon: "Scale",
    description: "Criminal psychology, eyewitness testimony, and legal applications",
    color: "bg-indigo-500",
  },
  {
    id: "social-influence",
    name: "Social Psychology & Influence",
    shortName: "Social",
    icon: "Users",
    description: "Conformity, persuasion, and social behavior",
    color: "bg-pink-500",
  },
  {
    id: "neuroscience",
    name: "Neuroscience & Brain Research",
    shortName: "Neuro",
    icon: "Brain",
    description: "Brain function, neuroplasticity, and cognitive neuroscience",
    color: "bg-cyan-500",
  },
];

export const courses: Course[] = [
  // ============================================================
  // CLINICAL & MENTAL HEALTH PSYCHOLOGY
  // ============================================================
  {
  id: "clinical-psychology",
  subjectId: "clinical-mental-health",
  title: "Clinical Psychology",
  description: "Foundations of assessment, diagnosis, and evidence-based treatment",
  level: "Beginner",
  lessons: [
    {
      id: "clinical-lesson-1",
      title: "What Clinical Psychologists Do",
      components: [
        {
          id: "clinical-l1-v1",
          title: "Clinical Psychology - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2Vx0QwL-6bE",
          content: "Overview of clinical psychology and how it differs from counseling and psychiatry.",
        },
        {
          id: "clinical-l1-v2",
          title: "Clinical Psychology - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/0oK2aOQ0xQc",
          content: "Common roles, settings, and populations served by clinical psychologists.",
        },
        {
          id: "clinical-l1-article",
          title: "The Scope of Clinical Psychology",
          duration: "8 min",
          type: "article",
          content: "A clear picture of what clinical psychologists do and how they help.",
          articleContent: `
            <h2>The Scope of Clinical Psychology</h2>

            <p>Clinical psychology focuses on understanding, assessing, and treating mental health concerns across the lifespan. Clinical psychologists work in a wide range of settings including hospitals, community clinics, private practices, schools, and research centers.</p>

            <h3>Core Responsibilities</h3>
            <ul>
              <li><strong>Assessment:</strong> Using interviews, observations, and standardized tests to understand concerns</li>
              <li><strong>Diagnosis:</strong> Applying evidence-based frameworks to guide treatment decisions</li>
              <li><strong>Intervention:</strong> Delivering psychotherapy and behavioral interventions</li>
              <li><strong>Prevention:</strong> Designing programs to reduce risk and promote wellbeing</li>
              <li><strong>Research:</strong> Studying what treatments work, for whom, and under what conditions</li>
            </ul>

            <h3>How Clinical Psychology Differs</h3>
            <p>Clinical psychologists are trained in both assessment and treatment, and many also conduct research. Unlike psychiatrists, they do not prescribe medication (in most regions). Compared to counseling psychologists, clinical psychologists often focus more on severe or complex mental health conditions.</p>

            <h3>Evidence-Based Practice</h3>
            <p>Modern clinical psychology emphasizes evidence-based care — integrating the best research evidence, clinical expertise, and client preferences to guide treatment decisions.</p>
          `,
        },
        {
          id: "clinical-l1-v3",
          title: "Evidence-Based Practice",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6pQZ2t5lC9E",
          content: "Why evidence-based treatments matter and how they are evaluated.",
        },
        {
          id: "clinical-l1-quiz",
          title: "Quiz: Clinical Psychology Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Which task is most central to clinical psychology?",
              options: [
                "Studying animal behavior in the wild",
                "Assessing and treating mental health concerns",
                "Designing marketing campaigns",
                "Managing organizational budgets"
              ],
              correctAnswer: 1,
              explanation: "Clinical psychology primarily focuses on assessment and treatment of mental health concerns.",
              hint: "Think about mental health, assessment, and therapy.",
            },
            {
              id: "q2",
              question: "Which professional typically prescribes medication?",
              options: [
                "Clinical psychologist",
                "Psychiatrist",
                "School counselor",
                "Social worker"
              ],
              correctAnswer: 1,
              explanation: "Psychiatrists are medical doctors and can prescribe medication.",
              hint: "Which role involves medical training?",
            },
            {
              id: "q3",
              question: "Evidence-based practice combines research, clinical expertise, and:",
              options: [
                "Marketing strategies",
                "Client preferences and values",
                "Social media trends",
                "Insurance requirements only"
              ],
              correctAnswer: 1,
              explanation: "Evidence-based practice integrates research, clinical expertise, and client preferences.",
              hint: "Think about the person receiving care and what matters to them.",
            },
            {
              id: "q4",
              question: "Which setting is common for clinical psychologists?",
              options: [
                "Hospitals and community clinics",
                "Only laboratories",
                "Only corporate offices",
                "Only schools"
              ],
              correctAnswer: 0,
              explanation: "Clinical psychologists often work in hospitals, clinics, and private practices.",
              hint: "Consider settings focused on mental health care.",
            },
            {
              id: "q5",
              question: "A key difference between clinical psychology and psychiatry is:",
              options: [
                "Clinical psychologists never use assessment",
                "Clinical psychologists are not trained in therapy",
                "Psychiatrists can prescribe medication",
                "Psychiatrists focus only on research"
              ],
              correctAnswer: 2,
              explanation: "Psychiatrists are medical doctors and can prescribe medication.",
              hint: "Which role has medical training?",
            },
          ],
        },
      ],
    },
    {
      id: "clinical-lesson-2",
      title: "Assessment and Treatment",
      components: [
        {
          id: "clinical-l2-v1",
          title: "Clinical Assessment - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/MO-6VJxH5Bw",
          content: "How clinical interviews and standardized tests are used in assessment.",
        },
        {
          id: "clinical-l2-v2",
          title: "Clinical Assessment - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7nK2x6yQp1g",
          content: "Understanding diagnosis and case formulation.",
        },
        {
          id: "clinical-l2-article",
          title: "From Assessment to Treatment",
          duration: "9 min",
          type: "article",
          content: "How clinicians turn assessment into a treatment plan.",
          articleContent: `
            <h2>From Assessment to Treatment</h2>

            <p>Clinical assessment is the process of gathering information to understand a person's concerns and strengths. This typically includes a clinical interview, behavioral observations, and standardized measures.</p>

            <h3>Key Assessment Tools</h3>
            <ul>
              <li><strong>Clinical Interview:</strong> Structured or semi-structured questions about symptoms and history</li>
              <li><strong>Behavioral Observation:</strong> Noting patterns in speech, mood, and behavior</li>
              <li><strong>Standardized Tests:</strong> Questionnaires or tasks with established reliability and validity</li>
            </ul>

            <h3>Case Formulation</h3>
            <p>Case formulation is a working hypothesis about why a problem developed and what keeps it going. It links symptoms to triggers, beliefs, emotions, and behaviors.</p>

            <h3>Evidence-Based Treatments</h3>
            <p>Clinical psychologists often use therapies supported by research, such as Cognitive Behavioral Therapy (CBT), Exposure Therapy, and skills-based interventions. Treatment is tailored to each person's goals and needs.</p>
          `,
        },
        {
          id: "clinical-l2-v3",
          title: "Treatment Approaches",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4p5aTQn8p3Y",
          content: "Overview of CBT, exposure therapy, and other common clinical approaches.",
        },
        {
          id: "clinical-l2-quiz",
          title: "Quiz: Assessment and Treatment",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Which of the following is a core component of clinical assessment?",
              options: [
                "Astrology chart",
                "Clinical interview",
                "Dream interpretation only",
                "Genetic testing only"
              ],
              correctAnswer: 1,
              explanation: "The clinical interview is a foundational assessment tool.",
              hint: "Think about a structured conversation with a client.",
            },
            {
              id: "q2",
              question: "What is a case formulation?",
              options: [
                "A legal document for insurance",
                "A working hypothesis about causes and maintaining factors",
                "A list of medications",
                "A personality test result"
              ],
              correctAnswer: 1,
              explanation: "Case formulation explains how a problem developed and persists.",
              hint: "It ties symptoms to triggers, thoughts, and behaviors.",
            },
            {
              id: "q3",
              question: "Which therapy is especially known for targeting thoughts and behaviors?",
              options: [
                "Cognitive Behavioral Therapy (CBT)",
                "Hypnosis only",
                "Psychoanalysis only",
                "Electroconvulsive therapy"
              ],
              correctAnswer: 0,
              explanation: "CBT focuses on the relationship between thoughts, feelings, and behaviors.",
              hint: "The name of the therapy is a big clue.",
            },
            {
              id: "q4",
              question: "Standardized tests are valuable because they are:",
              options: [
                "Always perfect",
                "Based on scientific reliability and validity",
                "Only used in hospitals",
                "Used instead of interviews"
              ],
              correctAnswer: 1,
              explanation: "Standardized tests are designed to be reliable and valid measures.",
              hint: "Think about consistency and accuracy across people.",
            },
            {
              id: "q5",
              question: "Which statement best describes evidence-based treatment?",
              options: [
                "It ignores client preferences",
                "It uses only the clinician’s intuition",
                "It integrates research evidence, clinical expertise, and client values",
                "It is always medication-based"
              ],
              correctAnswer: 2,
              explanation: "Evidence-based treatment combines research, expertise, and client preferences.",
              hint: "It’s a three-part integration model.",
            },
          ],
        },
      ],
    },
  ],
},

  {
    id: "abnormal-psychology",
    subjectId: "clinical-mental-health",
    title: "Abnormal Psychology",
    description: "Understanding psychological disorders and abnormal behavior patterns",
    level: "Beginner",
    lessons: [
      {
        id: "abnormal-lesson-1",
        title: "Introduction to Abnormal Psychology",
        components: [
          {
            id: "abnormal-l1-v1",
            title: "Introduction to Abnormal Psychology - Part 1",
            duration: "12 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Explore the definition and scope of abnormal psychology.",
          },
          {
            id: "abnormal-l1-v2",
            title: "Introduction to Abnormal Psychology - Part 2",
            duration: "10 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Learn about the different criteria used to define abnormal behavior.",
          },
          {
            id: "abnormal-l1-article",
            title: "Understanding Abnormal Behavior",
            duration: "8 min",
            type: "article",
            content: "Read about the key concepts in abnormal psychology.",
            articleContent: `
              <h2>Understanding Abnormal Behavior</h2>
              
              <p>Abnormal psychology is the branch of psychology that studies unusual patterns of behavior, emotion, and thought. But what exactly makes behavior "abnormal"? This question has puzzled psychologists for decades.</p>
              
              <h3>Four D's of Abnormality</h3>
              
              <p>Psychologists typically use four criteria to identify abnormal behavior:</p>
              
              <ul>
                <li><strong>Deviance:</strong> Behavior that differs from social norms and expectations</li>
                <li><strong>Distress:</strong> Behavior that causes emotional pain or discomfort</li>
                <li><strong>Dysfunction:</strong> Behavior that interferes with daily functioning</li>
                <li><strong>Danger:</strong> Behavior that poses risk to self or others</li>
              </ul>
              
              <h3>Cultural Context</h3>
              
              <p>It's important to note that what is considered abnormal can vary across cultures and time periods. Behaviors viewed as problematic in one culture may be accepted or even valued in another. This cultural relativity is a critical consideration in abnormal psychology.</p>
              
              <h3>The Medical Model</h3>
              
              <p>The medical model views psychological disorders as illnesses with biological origins that can be diagnosed and treated. This approach has led to significant advances in understanding and treating mental health conditions.</p>
              
              <h3>Modern Perspectives</h3>
              
              <p>Today, psychologists recognize that abnormal behavior typically results from a combination of biological, psychological, and social factors - known as the biopsychosocial model. This integrated approach provides a more complete understanding of mental health disorders.</p>
            `,
          },
          {
            id: "abnormal-l1-v3",
            title: "Classification Systems",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "Understanding the DSM-5 and how disorders are classified.",
          },
          {
            id: "abnormal-l1-quiz",
            title: "Quiz: Abnormal Psychology Basics",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Which of the following is NOT one of the 'Four D's' used to define abnormal behavior?",
                options: [
                  "Deviance",
                  "Distress",
                  "Dysfunction",
                  "Delusion"
                ],
                correctAnswer: 3,
                explanation: "The Four D's are Deviance, Distress, Dysfunction, and Danger. Delusion is a symptom, not a criterion for defining abnormality.",
                hint: "Think about the criteria used to identify abnormal behavior. One of these is actually a symptom rather than a defining criterion.",
              },
              {
                id: "q2",
                question: "The biopsychosocial model suggests that psychological disorders result from:",
                options: [
                  "Only biological factors",
                  "Only psychological factors",
                  "A combination of biological, psychological, and social factors",
                  "Supernatural causes"
                ],
                correctAnswer: 2,
                explanation: "The biopsychosocial model recognizes that mental health disorders arise from an interaction of biological, psychological, and social factors.",
                hint: "The name of the model gives you a clue - it combines three different types of factors.",
              },
              {
                id: "q3",
                question: "What is the DSM-5?",
                options: [
                  "A type of therapy",
                  "A classification system for psychological disorders",
                  "A brain imaging technique",
                  "A medication for depression"
                ],
                correctAnswer: 1,
                explanation: "The DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, 5th edition) is the standard classification system used by mental health professionals to diagnose psychological disorders.",
                hint: "DSM stands for Diagnostic and Statistical Manual. What would such a manual be used for?",
              },
              {
                id: "q4",
                question: "Why is cultural context important in abnormal psychology?",
                options: [
                  "All cultures define abnormality the same way",
                  "Culture has no impact on mental health",
                  "What is considered abnormal can vary across cultures",
                  "Only Western cultures experience psychological disorders"
                ],
                correctAnswer: 2,
                explanation: "Cultural context is crucial because behaviors considered abnormal in one culture may be normal or even valued in another. Abnormality is partly defined by cultural norms.",
                hint: "Think about how different cultures might have different standards for what's considered normal behavior.",
              },
              {
                id: "q5",
                question: "A person experiences extreme anxiety that prevents them from leaving their house or going to work. This best illustrates which criterion of abnormality?",
                options: [
                  "Deviance only",
                  "Distress only",
                  "Dysfunction only",
                  "Both distress and dysfunction"
                ],
                correctAnswer: 3,
                explanation: "This scenario illustrates both distress (extreme anxiety) and dysfunction (inability to work or leave home), demonstrating how criteria often overlap.",
                hint: "This person is experiencing emotional pain AND it's interfering with daily activities. Count how many D's that covers.",
              },
            ],
          },
        ],
      },
      {
        id: "abnormal-lesson-2",
        title: "Types of Psychological Disorders",
        components: [
          {
            id: "abnormal-l2-v1",
            title: "Anxiety Disorders - Part 1",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Learn about different types of anxiety disorders.",
          },
          {
            id: "abnormal-l2-v2",
            title: "Anxiety Disorders - Part 2",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Understanding depression and bipolar disorder.",
          },
          {
            id: "abnormal-l2-article",
            title: "Common Psychological Disorders",
            duration: "10 min",
            type: "article",
            content: "Comprehensive overview of major psychological disorders.",
            articleContent: `
              <h2>Common Psychological Disorders</h2>
              
              <p>Psychological disorders affect millions of people worldwide. Understanding these conditions is the first step toward reducing stigma and improving treatment.</p>
              
              <h3>Anxiety Disorders</h3>
              
              <p>Anxiety disorders are characterized by excessive fear and worry. Types include:</p>
              
              <ul>
                <li><strong>Generalized Anxiety Disorder (GAD):</strong> Persistent, excessive worry about various aspects of life</li>
                <li><strong>Panic Disorder:</strong> Recurring panic attacks with intense physical symptoms</li>
                <li><strong>Social Anxiety Disorder:</strong> Intense fear of social situations and judgment</li>
                <li><strong>Specific Phobias:</strong> Irrational fears of specific objects or situations</li>
              </ul>
              
              <h3>Mood Disorders</h3>
              
              <p>Mood disorders involve persistent disturbances in emotional state:</p>
              
              <ul>
                <li><strong>Major Depressive Disorder:</strong> Persistent sadness, loss of interest, and other symptoms lasting at least two weeks</li>
                <li><strong>Bipolar Disorder:</strong> Alternating periods of depression and mania (elevated mood and energy)</li>
                <li><strong>Persistent Depressive Disorder:</strong> Chronic, long-lasting depression lasting at least two years</li>
              </ul>
              
              <h3>Prevalence and Impact</h3>
              
              <p>Mental health disorders are remarkably common. Approximately 1 in 5 adults experiences a mental health condition in any given year. These disorders can significantly impact quality of life, relationships, and work performance.</p>
              
              <h3>Hope for Recovery</h3>
              
              <p>The good news is that most psychological disorders are highly treatable. With proper diagnosis and treatment - including therapy, medication, or both - many people with mental health conditions can lead fulfilling, productive lives.</p>
            `,
          },
          {
            id: "abnormal-l2-v3",
            title: "Schizophrenia and Psychotic Disorders",
            duration: "16 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "Understanding psychotic disorders and their symptoms.",
          },
          {
            id: "abnormal-l2-quiz",
            title: "Quiz: Psychological Disorders",
            duration: "12 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Which disorder is characterized by alternating periods of depression and mania?",
                options: [
                  "Major Depressive Disorder",
                  "Bipolar Disorder",
                  "Generalized Anxiety Disorder",
                  "Schizophrenia"
                ],
                correctAnswer: 1,
                explanation: "Bipolar disorder involves mood swings between depressive episodes and manic episodes (periods of abnormally elevated mood and energy).",
                hint: "The prefix 'bi-' means two. This disorder involves two different mood states.",
              },
              {
                id: "q2",
                question: "A person experiences sudden, intense episodes of fear with physical symptoms like rapid heartbeat and shortness of breath. This is most consistent with:",
                options: [
                  "Social Anxiety Disorder",
                  "Panic Disorder",
                  "Generalized Anxiety Disorder",
                  "Specific Phobia"
                ],
                correctAnswer: 1,
                explanation: "Panic disorder is characterized by recurrent, unexpected panic attacks - sudden episodes of intense fear with physical symptoms.",
                hint: "The key words are 'sudden' and 'intense episodes.' What's another word for a sudden episode of extreme fear?",
              },
              {
                id: "q3",
                question: "Hallucinations and delusions are primary symptoms of which type of disorder?",
                options: [
                  "Mood disorders",
                  "Anxiety disorders",
                  "Psychotic disorders",
                  "Personality disorders"
                ],
                correctAnswer: 2,
                explanation: "Psychotic disorders, such as schizophrenia, are characterized by hallucinations (perceiving things that aren't there) and delusions (false beliefs).",
                hint: "These symptoms involve losing touch with reality. Which category of disorders involves altered perception of reality?",
              },
              {
                id: "q4",
                question: "Approximately what percentage of adults experience a mental health condition in any given year?",
                options: [
                  "1 in 50 (2%)",
                  "1 in 20 (5%)",
                  "1 in 5 (20%)",
                  "1 in 2 (50%)"
                ],
                correctAnswer: 2,
                explanation: "About 1 in 5 (or 20%) of adults experience a mental health condition each year, showing that mental health issues are quite common.",
                hint: "Mental health conditions are much more common than most people think. It's a surprisingly high percentage.",
              },
              {
                id: "q5",
                question: "What is the main difference between GAD and specific phobias?",
                options: [
                  "GAD involves worry about many things; phobias involve fear of specific objects/situations",
                  "GAD is more severe than phobias",
                  "Phobias can be treated but GAD cannot",
                  "GAD only affects children"
                ],
                correctAnswer: 0,
                explanation: "Generalized Anxiety Disorder involves excessive worry about many aspects of life, while specific phobias involve intense fear of particular objects or situations.",
                hint: "Look at the words 'generalized' versus 'specific' - they're opposites that describe the scope of the anxiety.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "psychopathology",
    subjectId: "clinical-mental-health",
    title: "Psychopathology",
    description: "The scientific study of psychological disorders and their causes",
    level: "Intermediate",
    lessons: [
      {
        id: "psychopath-lesson-1",
        title: "Foundations of Psychopathology",
        components: [
          {
            id: "psychopath-l1-v1",
            title: "Introduction to Psychopathology - Part 1",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/xlA0TRsQCmM",
            content: "Understand the scientific study of mental disorders.",
          },
          {
            id: "psychopath-l1-v2",
            title: "Introduction to Psychopathology - Part 2",
            duration: "16 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/u6XAPnuFjJc",
            content: "Explore the biological factors that contribute to psychological disorders.",
          },
          {
            id: "psychopath-l1-article",
            title: "Theories of Psychopathology",
            duration: "12 min",
            type: "article",
            content: "Learn about different theoretical perspectives on mental disorders.",
            articleContent: `
              <h2>Theories of Psychopathology</h2>
              
              <p>Psychopathology is the scientific study of psychological disorders. Over time, various theoretical models have emerged to explain why mental health conditions develop.</p>
              
              <h3>Biological Perspective</h3>
              
              <p>The biological perspective emphasizes the role of genetics, brain chemistry, and neurological factors in mental disorders. Research has shown that many conditions have a hereditary component and involve imbalances in neurotransmitters like serotonin, dopamine, and norepinephrine.</p>
              
              <h3>Psychological Perspectives</h3>
              
              <p>Several psychological theories explain psychopathology:</p>
              
              <ul>
                <li><strong>Psychodynamic:</strong> Focuses on unconscious conflicts and early childhood experiences</li>
                <li><strong>Behavioral:</strong> Emphasizes learned behaviors and environmental factors</li>
                <li><strong>Cognitive:</strong> Highlights the role of dysfunctional thought patterns</li>
                <li><strong>Humanistic:</strong> Focuses on barriers to self-actualization and personal growth</li>
              </ul>
              
              <h3>Sociocultural Perspective</h3>
              
              <p>This perspective examines how cultural factors, social norms, poverty, discrimination, and other environmental stressors contribute to mental health problems. It recognizes that psychopathology doesn't exist in a vacuum but is influenced by social context.</p>
              
              <h3>Diathesis-Stress Model</h3>
              
              <p>Modern psychopathology often uses the diathesis-stress model, which proposes that disorders result from an interaction between a predisposition (diathesis) and environmental stressors. This model helps explain why some people develop disorders under stress while others don't.</p>
            `,
          },
          {
            id: "psychopath-l1-v3",
            title: "Assessment and Diagnosis",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/6nRQYlJKkz4",
            content: "Learn how psychological disorders are assessed and diagnosed.",
          },
          {
            id: "psychopath-l1-quiz",
            title: "Quiz: Psychopathology Fundamentals",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "The diathesis-stress model proposes that psychological disorders result from:",
                options: [
                  "Genetics alone",
                  "Environmental stress alone",
                  "An interaction between predisposition and stress",
                  "Poor parenting"
                ],
                correctAnswer: 2,
                explanation: "The diathesis-stress model suggests that disorders develop when someone with a predisposition (diathesis) experiences significant environmental stress.",
                hint: "The model has two components in its name. It's about how these two things work together.",
              },
              {
                id: "q2",
                question: "Which perspective on psychopathology emphasizes unconscious conflicts and childhood experiences?",
                options: [
                  "Biological",
                  "Behavioral",
                  "Psychodynamic",
                  "Cognitive"
                ],
                correctAnswer: 2,
                explanation: "The psychodynamic perspective, originating from Freud's work, focuses on unconscious processes and the influence of early childhood experiences.",
                hint: "This perspective was developed by Sigmund Freud and focuses on what happens beneath conscious awareness.",
              },
              {
                id: "q3",
                question: "Neurotransmitter imbalances are emphasized by which perspective?",
                options: [
                  "Biological perspective",
                  "Humanistic perspective",
                  "Sociocultural perspective",
                  "Behavioral perspective"
                ],
                correctAnswer: 0,
                explanation: "The biological perspective focuses on physical and chemical processes in the brain and body, including neurotransmitter imbalances.",
                hint: "Neurotransmitters are chemicals in the brain. Which perspective deals with the physical/chemical aspects of mental health?",
              },
              {
                id: "q4",
                question: "The cognitive perspective on psychopathology focuses primarily on:",
                options: [
                  "Genetic factors",
                  "Dysfunctional thought patterns",
                  "Social influences",
                  "Unconscious motivations"
                ],
                correctAnswer: 1,
                explanation: "The cognitive perspective emphasizes how dysfunctional or distorted thinking patterns contribute to psychological disorders.",
                hint: "The word 'cognitive' relates to thinking. What aspect of thinking might contribute to mental health problems?",
              },
              {
                id: "q5",
                question: "Which approach considers biological, psychological, AND social factors together?",
                options: [
                  "Medical model",
                  "Behavioral model",
                  "Biopsychosocial model",
                  "Psychodynamic model"
                ],
                correctAnswer: 2,
                explanation: "The biopsychosocial model integrates biological, psychological, and social factors to provide a comprehensive understanding of mental health.",
                hint: "Look for a model that has all three types of factors in its name: bio + psycho + social.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "psychotherapy",
    subjectId: "clinical-mental-health",
    title: "Psychotherapy",
    description: "Therapeutic techniques and approaches for treating psychological disorders",
    level: "Intermediate",
    lessons: [
      {
        id: "therapy-lesson-1",
        title: "Introduction to Psychotherapy",
        components: [
          {
            id: "therapy-l1-v1",
            title: "What is Psychotherapy? - Part 1",
            duration: "11 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/6nRQYlJKkz4",
            content: "Introduction to psychotherapy and its various forms.",
          },
          {
            id: "therapy-l1-v2",
            title: "What is Psychotherapy? - Part 2",
            duration: "18 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/xlA0TRsQCmM",
            content: "Overview of psychodynamic, humanistic, and behavioral therapies.",
          },
          {
            id: "therapy-l1-article",
            title: "Understanding Different Therapy Types",
            duration: "10 min",
            type: "article",
            content: "Comprehensive guide to therapeutic approaches.",
            articleContent: `
              <h2>Understanding Different Therapy Types</h2>
              
              <p>Psychotherapy, or talk therapy, involves working with a trained mental health professional to address psychological issues. Different therapeutic approaches suit different needs and conditions.</p>
              
              <h3>Psychodynamic Therapy</h3>
              
              <p>Based on Freud's psychoanalysis, psychodynamic therapy explores unconscious patterns and how past experiences influence current behavior. Therapists help clients gain insight into recurring patterns in their lives and relationships.</p>
              
              <h3>Humanistic Therapies</h3>
              
              <p>Humanistic approaches emphasize personal growth and self-actualization:</p>
              
              <ul>
                <li><strong>Person-Centered Therapy:</strong> Carl Rogers' approach that provides unconditional positive regard and empathy</li>
                <li><strong>Gestalt Therapy:</strong> Focuses on present-moment awareness and personal responsibility</li>
                <li><strong>Existential Therapy:</strong> Addresses questions of meaning, freedom, and responsibility</li>
              </ul>
              
              <h3>Behavioral Therapies</h3>
              
              <p>These therapies focus on changing problematic behaviors through learning principles:</p>
              
              <ul>
                <li><strong>Classical Conditioning:</strong> Techniques like systematic desensitization for phobias</li>
                <li><strong>Operant Conditioning:</strong> Using reinforcement and punishment to modify behavior</li>
                <li><strong>Exposure Therapy:</strong> Gradually confronting feared situations</li>
              </ul>
              
              <h3>Cognitive-Behavioral Therapy (CBT)</h3>
              
              <p>CBT combines cognitive and behavioral approaches, focusing on how thoughts influence feelings and behaviors. It's one of the most researched and effective therapies for many conditions.</p>
            `,
          },
          {
            id: "therapy-l1-v3",
            title: "Evidence-Based Practices",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/u6XAPnuFjJc",
            content: "Learn about research-supported therapeutic interventions.",
          },
          {
            id: "therapy-l1-quiz",
            title: "Quiz: Psychotherapy Approaches",
            duration: "12 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "A therapist provides warmth, empathy, and unconditional acceptance without judgment. This is most characteristic of which approach?",
                options: [
                  "Psychoanalytic therapy",
                  "Behavioral therapy",
                  "Person-centered therapy",
                  "Cognitive therapy"
                ],
                correctAnswer: 2,
                explanation: "Person-centered therapy, developed by Carl Rogers, emphasizes unconditional positive regard - accepting clients without judgment.",
                hint: "Carl Rogers developed this approach. It's centered on the person and accepting them as they are.",
              },
              {
                id: "q2",
                question: "Exposure therapy, used to treat phobias, is based on which therapeutic tradition?",
                options: [
                  "Psychodynamic",
                  "Behavioral",
                  "Humanistic",
                  "Existential"
                ],
                correctAnswer: 1,
                explanation: "Exposure therapy is a behavioral technique based on learning principles, specifically the idea that fears can be unlearned through gradual exposure.",
                hint: "This therapy involves changing behavior through learning. Which tradition focuses on learning and behavior?",
              },
              {
                id: "q3",
                question: "Which therapy explores unconscious conflicts and childhood experiences?",
                options: [
                  "Cognitive-Behavioral Therapy",
                  "Psychodynamic therapy",
                  "Person-centered therapy",
                  "Dialectical Behavior Therapy"
                ],
                correctAnswer: 1,
                explanation: "Psychodynamic therapy, rooted in Freudian psychoanalysis, explores unconscious processes and how early experiences shape current behavior.",
                hint: "This approach originated with Freud and focuses on what's beneath conscious awareness.",
              },
              {
                id: "q4",
                question: "What does research suggest is the most important factor in therapy success?",
                options: [
                  "The specific type of therapy used",
                  "The cost of therapy",
                  "The therapeutic relationship",
                  "The length of sessions"
                ],
                correctAnswer: 2,
                explanation: "Research consistently shows that the quality of the therapeutic relationship - the connection between client and therapist - is the strongest predictor of therapy success.",
                hint: "It's not about the technique or logistics - it's about the human connection between therapist and client.",
              },
              {
                id: "q5",
                question: "DBT (Dialectical Behavior Therapy) was originally developed to treat which condition?",
                options: [
                  "Depression",
                  "Anxiety disorders",
                  "Borderline personality disorder",
                  "Schizophrenia"
                ],
                correctAnswer: 2,
                explanation: "DBT was developed by Marsha Linehan specifically to treat borderline personality disorder, though it's now used for other conditions as well.",
                hint: "This therapy focuses heavily on emotion regulation and was designed for a condition characterized by intense emotional instability.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "cognitive-behavioral-therapy",
    subjectId: "clinical-mental-health",
    title: "Cognitive Behavioral Therapy",
    description: "In-depth study of CBT techniques and applications",
    level: "Intermediate",
    lessons: [
      {
        id: "cbt-lesson-1",
        title: "CBT Fundamentals",
        components: [
          {
            id: "cbt-l1-v1",
            title: "Foundations of CBT - Part 1",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/0ViaCs0k2jM",
            content: "Understanding the cognitive model and core principles of CBT.",
          },
          {
            id: "cbt-l1-v2",
            title: "Foundations of CBT - Part 2",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/xlA0TRsQCmM",
            content: "Learn how to recognize and track automatic negative thoughts.",
          },
          {
            id: "cbt-l1-article",
            title: "The Cognitive Model",
            duration: "9 min",
            type: "article",
            content: "Deep dive into how thoughts, feelings, and behaviors interact.",
            articleContent: `
              <h2>The Cognitive Model</h2>
              
              <p>Cognitive Behavioral Therapy (CBT) is based on the idea that our thoughts, feelings, and behaviors are interconnected. By changing how we think, we can change how we feel and act.</p>
              
              <h3>The CBT Triangle</h3>
              
              <p>CBT uses a simple but powerful model showing how three elements interact:</p>
              
              <ul>
                <li><strong>Thoughts:</strong> Our interpretations and beliefs about situations</li>
                <li><strong>Feelings:</strong> Our emotional responses</li>
                <li><strong>Behaviors:</strong> Our actions and reactions</li>
              </ul>
              
              <p>These three elements form a cycle. Changing any one element affects the others. CBT typically focuses on changing thoughts and behaviors, which then influences feelings.</p>
              
              <h3>Automatic Thoughts</h3>
              
              <p>Automatic thoughts are rapid, habitual thoughts that pop into our minds in response to situations. They often happen so quickly we barely notice them, yet they significantly influence our emotions and behavior.</p>
              
              <p>Common types of distorted automatic thoughts include:</p>
              
              <ul>
                <li><strong>All-or-nothing thinking:</strong> Viewing situations in extreme, black-and-white terms</li>
                <li><strong>Catastrophizing:</strong> Expecting the worst possible outcome</li>
                <li><strong>Overgeneralization:</strong> Drawing broad conclusions from single events</li>
                <li><strong>Mental filtering:</strong> Focusing only on negative aspects while ignoring positives</li>
                <li><strong>Mind reading:</strong> Assuming we know what others are thinking</li>
              </ul>
              
              <h3>Cognitive Restructuring</h3>
              
              <p>The core technique of CBT is cognitive restructuring - identifying and challenging distorted thoughts.</p>
            `,
          },
          {
            id: "cbt-l1-v3",
            title: "Cognitive Restructuring Techniques",
            duration: "17 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/6nRQYlJKkz4",
            content: "Practical techniques for challenging and changing negative thoughts.",
          },
          {
            id: "cbt-l1-quiz",
            title: "Quiz: CBT Principles",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "According to the CBT model, which three elements are interconnected?",
                options: [
                  "Past, present, and future",
                  "Thoughts, feelings, and behaviors",
                  "Id, ego, and superego",
                  "Body, mind, and spirit"
                ],
                correctAnswer: 1,
                explanation: "CBT is based on the interconnection between thoughts (cognitions), feelings (emotions), and behaviors (actions).",
                hint: "Think about the name 'Cognitive Behavioral Therapy.' It deals with cognitions (thoughts), behavior, and their emotional connections.",
              },
              {
                id: "q2",
                question: "A person thinks 'I failed this test, so I'm a complete failure at everything.' This is an example of which cognitive distortion?",
                options: [
                  "Mind reading",
                  "Catastrophizing",
                  "Overgeneralization",
                  "Mental filtering"
                ],
                correctAnswer: 2,
                explanation: "Overgeneralization involves drawing broad, sweeping conclusions from a single event - in this case, generalizing from one test to being 'a complete failure at everything.'",
                hint: "The person is taking one specific event and making it apply to everything. What's it called when you make something too general?",
              },
              {
                id: "q3",
                question: "What are 'automatic thoughts' in CBT?",
                options: [
                  "Thoughts that happen during sleep",
                  "Rapid, habitual thoughts that pop into our minds",
                  "Thoughts we consciously choose",
                  "Subconscious desires"
                ],
                correctAnswer: 1,
                explanation: "Automatic thoughts are quick, habitual thoughts that arise spontaneously in response to situations, often without our full awareness.",
                hint: "The word 'automatic' suggests these thoughts happen quickly and without conscious effort, like reflexes.",
              },
              {
                id: "q4",
                question: "Cognitive restructuring primarily involves:",
                options: [
                  "Suppressing all negative thoughts",
                  "Identifying and challenging distorted thoughts",
                  "Avoiding situations that trigger negative thoughts",
                  "Interpreting dreams"
                ],
                correctAnswer: 1,
                explanation: "Cognitive restructuring is the process of identifying distorted or unhelpful thoughts, examining the evidence, and developing more balanced alternatives.",
                hint: "The word 'restructuring' means changing the structure. We're changing how thoughts are structured, not eliminating or avoiding them.",
              },
              {
                id: "q5",
                question: "Which statement best describes CBT's evidence base?",
                options: [
                  "CBT has little research support",
                  "CBT only works for depression",
                  "CBT is one of the most researched and validated therapies",
                  "CBT is too new to have research support"
                ],
                correctAnswer: 2,
                explanation: "CBT has extensive research support and is considered an evidence-based treatment for many psychological conditions including depression, anxiety, and PTSD.",
                hint: "CBT has been around since the 1960s and has been studied extensively. It's considered a 'gold standard' treatment.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // BUSINESS & MARKETING PSYCHOLOGY
  // ============================================================
  
  {
    id: "consumer-psychology",
    subjectId: "business-marketing",
    title: "Consumer Psychology",
    description: "Understanding how consumers make purchasing decisions",
    level: "Beginner",
    lessons: [
      {
        id: "consumer-lesson-1",
        title: "Introduction to Consumer Behavior",
        components: [
          {
            id: "consumer-l1-v1",
            title: "What Drives Consumer Decisions? - Part 1",
            duration: "12 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Explore the psychological factors that influence buying behavior.",
          },
          {
            id: "consumer-l1-v2",
            title: "What Drives Consumer Decisions? - Part 2",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Learn about emotional vs. rational decision-making in purchases.",
          },
          {
            id: "consumer-l1-article",
            title: "The Psychology Behind Buying",
            duration: "10 min",
            type: "article",
            content: "Deep dive into consumer behavior patterns.",
            articleContent: `
              <h2>The Psychology Behind Buying</h2>
              
              <p>Consumer psychology examines how thoughts, beliefs, feelings, and perceptions influence how people buy and relate to goods and services. Understanding these patterns is crucial for businesses and marketers.</p>
              
              <h3>The Decision-Making Process</h3>
              
              <p>Consumers typically go through five stages when making purchases:</p>
              
              <ul>
                <li><strong>Problem Recognition:</strong> Realizing a need or want</li>
                <li><strong>Information Search:</strong> Researching options and solutions</li>
                <li><strong>Evaluation:</strong> Comparing alternatives</li>
                <li><strong>Purchase Decision:</strong> Choosing what to buy</li>
                <li><strong>Post-Purchase Behavior:</strong> Evaluating satisfaction</li>
              </ul>
              
              <h3>Emotional vs. Rational Buying</h3>
              
              <p>While consumers like to think they make rational decisions, research shows that emotions play a dominant role. Studies indicate that up to 95% of purchasing decisions are subconscious and emotional. Successful brands tap into emotions like happiness, security, belonging, and status.</p>
              
              <h3>Key Psychological Triggers</h3>
              
              <p>Several psychological principles heavily influence consumer behavior:</p>
              
              <ul>
                <li><strong>Scarcity:</strong> Limited availability increases perceived value</li>
                <li><strong>Social Proof:</strong> People follow what others are doing</li>
                <li><strong>Authority:</strong> Trust in experts and credible sources</li>
                <li><strong>Reciprocity:</strong> Feeling obligated after receiving something</li>
                <li><strong>Consistency:</strong> Desire to align with previous commitments</li>
              </ul>
              
              <h3>The Power of Branding</h3>
              
              <p>Brands create mental shortcuts that simplify decision-making. Strong brands evoke emotional connections and associations that can override logical comparison shopping. Apple, Nike, and Coca-Cola excel at creating these emotional bonds.</p>
            `,
          },
          {
            id: "consumer-l1-v3",
            title: "Consumer Motivations and Needs",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "Understanding Maslow's hierarchy and consumer motivations.",
          },
          {
            id: "consumer-l1-quiz",
            title: "Quiz: Consumer Psychology Fundamentals",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Research suggests what percentage of purchasing decisions are driven by subconscious, emotional factors?",
                options: [
                  "About 25%",
                  "About 50%",
                  "About 75%",
                  "About 95%"
                ],
                correctAnswer: 3,
                explanation: "Studies indicate that approximately 95% of purchasing decisions are made subconsciously and are driven primarily by emotions rather than rational thought.",
                hint: "The answer might surprise you - emotions play a much larger role than most people realize.",
              },
              {
                id: "q2",
                question: "Which stage of the consumer decision-making process involves comparing different options?",
                options: [
                  "Problem Recognition",
                  "Information Search",
                  "Evaluation",
                  "Post-Purchase Behavior"
                ],
                correctAnswer: 2,
                explanation: "During the Evaluation stage, consumers compare and assess different alternatives before making a purchase decision.",
                hint: "After gathering information, consumers need to compare their options before deciding.",
              },
              {
                id: "q3",
                question: "The principle that limited availability increases perceived value is called:",
                options: [
                  "Social Proof",
                  "Scarcity",
                  "Authority",
                  "Reciprocity"
                ],
                correctAnswer: 1,
                explanation: "Scarcity creates urgency and increases perceived value. When something is rare or in limited supply, people want it more.",
                hint: "Think about 'limited time offers' or 'only 3 left in stock' messages.",
              },
              {
                id: "q4",
                question: "When consumers follow the behavior of others, they are influenced by:",
                options: [
                  "Authority bias",
                  "Consistency principle",
                  "Social proof",
                  "Reciprocity"
                ],
                correctAnswer: 2,
                explanation: "Social proof is the psychological phenomenon where people look to others' behaviors to guide their own decisions, especially in uncertain situations.",
                hint: "This is why customer reviews and testimonials are so powerful.",
              },
              {
                id: "q5",
                question: "What is the primary function of strong brands in consumer psychology?",
                options: [
                  "To increase product costs",
                  "To create emotional connections and mental shortcuts",
                  "To confuse competitors",
                  "To reduce advertising needs"
                ],
                correctAnswer: 1,
                explanation: "Strong brands create emotional connections with consumers and serve as mental shortcuts that simplify decision-making, often overriding logical price comparisons.",
                hint: "Think about why people pay premium prices for brands like Apple or Nike.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "behavioral-economics",
    subjectId: "business-marketing",
    title: "Behavioral Economics",
    description: "How psychology influences economic decisions and market behavior",
    level: "Intermediate",
    lessons: [
      {
        id: "behavioral-econ-lesson-1",
        title: "Foundations of Behavioral Economics",
        components: [
          {
            id: "behavioral-econ-l1-v1",
            title: "Introduction to Behavioral Economics - Part 1",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/xlA0TRsQCmM",
            content: "Exploring how real people make economic decisions.",
          },
          {
            id: "behavioral-econ-l1-v2",
            title: "Introduction to Behavioral Economics - Part 2",
            duration: "12 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/u6XAPnuFjJc",
            content: "Understanding cognitive biases in economic choices.",
          },
          {
            id: "behavioral-econ-l1-article",
            title: "Cognitive Biases and Economic Behavior",
            duration: "11 min",
            type: "article",
            content: "How mental shortcuts affect financial decisions.",
            articleContent: `
              <h2>Cognitive Biases and Economic Behavior</h2>
              
              <p>Behavioral economics combines insights from psychology and economics to understand how people actually make economic decisions - which often differs from how traditional economic theory predicts they should behave.</p>
              
              <h3>The Rational Actor Myth</h3>
              
              <p>Classical economics assumes people are rational actors who always make decisions to maximize their self-interest. Behavioral economics shows this isn't true. People make systematic errors due to cognitive biases, emotions, and mental shortcuts called heuristics.</p>
              
              <h3>Key Concepts in Behavioral Economics</h3>
              
              <ul>
                <li><strong>Loss Aversion:</strong> People feel the pain of losing something more intensely than the pleasure of gaining something of equal value. Research shows losses hurt about twice as much as gains feel good.</li>
                <li><strong>Anchoring:</strong> People rely too heavily on the first piece of information offered (the "anchor") when making decisions. If you see a shirt originally priced at $100 marked down to $50, the $100 serves as an anchor making $50 seem like a great deal.</li>
                <li><strong>Mental Accounting:</strong> People treat money differently depending on its source or intended use, even though money is fungible. A $100 tax refund might be spent more freely than $100 earned from work.</li>
                <li><strong>Present Bias:</strong> People disproportionately prefer immediate rewards over future ones, leading to problems with saving and delayed gratification.</li>
              </ul>
              
              <h3>Prospect Theory</h3>
              
              <p>Developed by Daniel Kahneman and Amos Tversky, prospect theory explains how people evaluate potential losses and gains. It demonstrates that people make decisions based on perceived gains and losses relative to a reference point, not absolute outcomes.</p>
              
              <h3>Nudge Theory</h3>
              
              <p>Richard Thaler's work on "nudges" shows how subtle changes in how choices are presented can dramatically influence behavior without restricting freedom of choice. Examples include automatic enrollment in retirement savings plans or placing healthy foods at eye level in cafeterias.</p>
              
              <h3>Real-World Applications</h3>
              
              <p>Behavioral economics has transformed policy-making, marketing, and product design. From improving organ donation rates to increasing retirement savings, understanding how people actually think and decide helps create better outcomes.</p>
            `,
          },
          {
            id: "behavioral-econ-l1-v3",
            title: "Prospect Theory and Decision-Making",
            duration: "16 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/6nRQYlJKkz4",
            content: "Understanding how people evaluate risks and rewards.",
          },
          {
            id: "behavioral-econ-l1-quiz",
            title: "Quiz: Behavioral Economics Basics",
            duration: "12 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Loss aversion means that:",
                options: [
                  "People never take risks",
                  "Losses feel roughly twice as painful as equivalent gains feel good",
                  "People always choose the safest option",
                  "Gains and losses have equal psychological impact"
                ],
                correctAnswer: 1,
                explanation: "Loss aversion describes how the psychological pain of losing something is about twice as strong as the pleasure of gaining something of equal value.",
                hint: "Think about how much worse it feels to lose $50 compared to how good it feels to find $50.",
              },
              {
                id: "q2",
                question: "When a $150 jacket is marked down from $300, the original price serves as:",
                options: [
                  "A nudge",
                  "An anchor",
                  "Loss aversion",
                  "Mental accounting"
                ],
                correctAnswer: 1,
                explanation: "The original $300 price serves as an anchor that influences your perception of the $150 price, making it seem like a better deal than if you saw it priced at $150 from the start.",
                hint: "The first number you see 'anchors' your perception of value.",
              },
              {
                id: "q3",
                question: "Which concept explains why someone might spend a tax refund more freely than their regular salary?",
                options: [
                  "Anchoring",
                  "Loss aversion",
                  "Mental accounting",
                  "Prospect theory"
                ],
                correctAnswer: 2,
                explanation: "Mental accounting describes how people categorize and treat money differently based on its source or intended use, even though all money has the same value.",
                hint: "People create different mental 'accounts' or categories for different types of money.",
              },
              {
                id: "q4",
                question: "Present bias refers to the tendency to:",
                options: [
                  "Prefer immediate rewards over future rewards",
                  "Always live in the moment",
                  "Ignore past experiences",
                  "Focus on current events"
                ],
                correctAnswer: 0,
                explanation: "Present bias is the tendency to disproportionately prefer immediate rewards over future ones, which can lead to problems with saving money and delayed gratification.",
                hint: "This explains why it's hard to save for retirement when you could spend the money today.",
              },
              {
                id: "q5",
                question: "Who developed Prospect Theory, which revolutionized understanding of decision-making under risk?",
                options: [
                  "Adam Smith",
                  "Richard Thaler",
                  "Daniel Kahneman and Amos Tversky",
                  "Milton Friedman"
                ],
                correctAnswer: 2,
                explanation: "Daniel Kahneman and Amos Tversky developed Prospect Theory, showing how people evaluate potential losses and gains. Kahneman won the Nobel Prize for this work.",
                hint: "One of these psychologists won the Nobel Prize in Economics for this theory.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "marketing-psychology",
    subjectId: "business-marketing",
    title: "Marketing Psychology",
    description: "Psychological principles applied to effective marketing strategies",
    level: "Intermediate",
    lessons: [
      {
        id: "marketing-psych-lesson-1",
        title: "Persuasion in Marketing",
        components: [
          {
            id: "marketing-psych-l1-v1",
            title: "The Psychology of Persuasion - Part 1",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Cialdini's principles of influence in marketing.",
          },
          {
            id: "marketing-psych-l1-v2",
            title: "The Psychology of Persuasion - Part 2",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "How to ethically apply persuasion techniques.",
          },
          {
            id: "marketing-psych-l1-article",
            title: "Six Principles of Influence",
            duration: "12 min",
            type: "article",
            content: "Understanding Cialdini's research on persuasion.",
            articleContent: `
              <h2>Six Principles of Influence</h2>
              
              <p>Dr. Robert Cialdini's groundbreaking research identified six universal principles of persuasion that are consistently effective across cultures. These principles are fundamental to marketing psychology.</p>
              
              <h3>1. Reciprocity</h3>
              
              <p>People feel obligated to return favors. When you give something to someone, they feel compelled to give back. In marketing, this is why free samples, free trials, and valuable content are so effective. The gym offering a free week pass or the software company providing a 30-day trial leverages reciprocity.</p>
              
              <h3>2. Commitment and Consistency</h3>
              
              <p>Once people commit to something, they're more likely to follow through to remain consistent with that commitment. This is why getting small initial commitments (like signing up for a newsletter) can lead to larger commitments later (making a purchase).</p>
              
              <h3>3. Social Proof</h3>
              
              <p>People look to others' behavior to guide their own decisions, especially in uncertain situations. Customer reviews, testimonials, user counts ("Join 10 million users"), and influencer endorsements all leverage social proof. The more uncertain people are, the more they rely on others' actions.</p>
              
              <h3>4. Authority</h3>
              
              <p>People respect authority and expertise. This is why brands use expert endorsements, certifications, and credentials. A dentist recommending toothpaste is more persuasive than a random person. White coats, titles, and professional credentials all trigger authority bias.</p>
              
              <h3>5. Liking</h3>
              
              <p>We're more likely to say yes to people we like. Factors that increase liking include physical attractiveness, similarity, compliments, and cooperation toward mutual goals. This is why brands invest in likeable spokespeople and why relationship-building is crucial in sales.</p>
              
              <h3>6. Scarcity</h3>
              
              <p>People value things more when they're rare or becoming less available. "Limited time offer," "Only 3 left in stock," and "Exclusive access" all tap into scarcity. The fear of missing out (FOMO) is a powerful motivator.</p>
              
              <h3>Ethical Application</h3>
              
              <p>These principles are tools that can be used ethically or manipulatively. Ethical marketers ensure their claims are truthful and that they're genuinely offering value, not just manipulating people into bad decisions.</p>
            `,
          },
          {
            id: "marketing-psych-l1-v3",
            title: "Color Psychology and Brand Identity",
            duration: "11 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "How colors influence consumer emotions and brand perception.",
          },
          {
            id: "marketing-psych-l1-quiz",
            title: "Quiz: Marketing Psychology Principles",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "When a company offers a free sample, hoping customers will feel obligated to purchase, they're using which principle?",
                options: [
                  "Authority",
                  "Reciprocity",
                  "Scarcity",
                  "Social Proof"
                ],
                correctAnswer: 1,
                explanation: "Reciprocity is the principle that people feel obligated to return favors. Free samples create a sense of indebtedness that can influence purchasing.",
                hint: "This principle is about giving something first to get something back later.",
              },
              {
                id: "q2",
                question: "A website displays 'Join 5 million satisfied customers' to influence new buyers. This is an example of:",
                options: [
                  "Authority",
                  "Commitment and Consistency",
                  "Social Proof",
                  "Liking"
                ],
                correctAnswer: 2,
                explanation: "Social proof leverages the tendency for people to follow the crowd. Showing that millions of others have made the same choice reduces uncertainty and increases trust.",
                hint: "This shows what other people are doing to influence your behavior.",
              },
              {
                id: "q3",
                question: "Using a dentist to recommend a toothpaste brand leverages which persuasion principle?",
                options: [
                  "Authority",
                  "Liking",
                  "Consistency",
                  "Reciprocity"
                ],
                correctAnswer: 0,
                explanation: "Authority principle states that people trust and follow experts in their field. A dentist's professional expertise makes their toothpaste recommendation more credible.",
                hint: "Dentists are experts in dental health. Which principle involves expert credibility?",
              },
              {
                id: "q4",
                question: "'Only 2 items left in stock!' is an example of which principle?",
                options: [
                  "Social Proof",
                  "Commitment",
                  "Scarcity",
                  "Authority"
                ],
                correctAnswer: 2,
                explanation: "Scarcity creates urgency by suggesting limited availability. Things seem more valuable when they're rare or running out.",
                hint: "This creates a sense of urgency and fear of missing out.",
              },
              {
                id: "q5",
                question: "Which of Cialdini's principles explains why getting someone to sign up for a free newsletter might lead to future purchases?",
                options: [
                  "Reciprocity",
                  "Commitment and Consistency",
                  "Authority",
                  "Scarcity"
                ],
                correctAnswer: 1,
                explanation: "Commitment and Consistency explains that small initial commitments (newsletter signup) often lead to larger commitments (purchases) as people strive to act consistently with their previous actions.",
                hint: "People want to act in ways that align with their past behavior and commitments.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "cognitive-bias",
    subjectId: "business-marketing",
    title: "Cognitive Bias",
    description: "Understanding mental shortcuts and systematic thinking errors in business",
    level: "Intermediate",
    lessons: [
      {
        id: "cognitive-bias-lesson-1",
        title: "Common Cognitive Biases",
        components: [
          {
            id: "cognitive-bias-l1-v1",
            title: "Introduction to Cognitive Biases - Part 1",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/xlA0TRsQCmM",
            content: "What are cognitive biases and why do they exist?",
          },
          {
            id: "cognitive-bias-l1-v2",
            title: "Introduction to Cognitive Biases - Part 2",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/u6XAPnuFjJc",
            content: "Exploring confirmation bias and availability heuristic.",
          },
          {
            id: "cognitive-bias-l1-article",
            title: "Understanding Mental Shortcuts",
            duration: "10 min",
            type: "article",
            content: "Deep dive into how biases affect decision-making.",
            articleContent: `
              <h2>Understanding Mental Shortcuts</h2>
              
              <p>Cognitive biases are systematic patterns of deviation from rational judgment. They're mental shortcuts (heuristics) that help our brains process information quickly, but they can lead to predictable errors in thinking.</p>
              
              <h3>Why Do Biases Exist?</h3>
              
              <p>Our brains process an enormous amount of information every day. To manage this efficiently, we developed mental shortcuts. While these heuristics are usually helpful, they can sometimes lead us astray. Understanding these biases is crucial for both consumers and marketers.</p>
              
              <h3>Major Cognitive Biases</h3>
              
              <ul>
                <li><strong>Confirmation Bias:</strong> The tendency to search for, interpret, and remember information that confirms our pre-existing beliefs while ignoring contradictory evidence. This is one of the most powerful biases affecting human judgment.</li>
                
                <li><strong>Anchoring Bias:</strong> Over-relying on the first piece of information encountered. The initial number or fact "anchors" subsequent judgments. Retailers use this when showing the original price before the sale price.</li>
                
                <li><strong>Availability Heuristic:</strong> Judging the likelihood of events based on how easily examples come to mind. People overestimate the probability of dramatic events (like plane crashes) because they're memorable and frequently reported.</li>
                
                <li><strong>Bandwagon Effect:</strong> The tendency to do or believe things because many other people do. This is similar to social proof but specifically about following trends.</li>
                
                <li><strong>Sunk Cost Fallacy:</strong> Continuing an endeavor because of previously invested resources (time, money, effort), even when continuing isn't the best decision.</li>
                
                <li><strong>Halo Effect:</strong> Allowing one positive quality to influence overall judgment. If we like one aspect of something, we tend to view everything about it positively.</li>
                
                <li><strong>Framing Effect:</strong> Drawing different conclusions from the same information depending on how it's presented. "90% fat-free" sounds better than "10% fat" despite being identical.</li>
              </ul>
              
              <h3>Biases in Marketing</h3>
              
              <p>Marketers leverage cognitive biases to influence consumer behavior. Understanding these biases helps consumers make better decisions and helps marketers create more effective, ethical campaigns.</p>
              
              <h3>Overcoming Biases</h3>
              
              <p>While we can't eliminate cognitive biases completely, awareness is the first step toward better thinking. Actively seeking contradictory information, slowing down decision-making, and using systematic analysis can help mitigate their effects.</p>
            `,
          },
          {
            id: "cognitive-bias-l1-v3",
            title: "Framing Effects and Decision-Making",
            duration: "12 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/6nRQYlJKkz4",
            content: "How the same information presented differently changes decisions.",
          },
          {
            id: "cognitive-bias-l1-quiz",
            title: "Quiz: Cognitive Biases",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Sarah only pays attention to news articles that support her political views and dismisses those that don't. This is an example of:",
                options: [
                  "Availability heuristic",
                  "Confirmation bias",
                  "Anchoring bias",
                  "Framing effect"
                ],
                correctAnswer: 1,
                explanation: "Confirmation bias is the tendency to seek out, interpret, and remember information that confirms existing beliefs while ignoring contradictory evidence.",
                hint: "She's 'confirming' what she already believes by selecting supportive information.",
              },
              {
                id: "q2",
                question: "After seeing news coverage of a shark attack, Tom overestimates the danger of swimming in the ocean. This demonstrates:",
                options: [
                  "Confirmation bias",
                  "Sunk cost fallacy",
                  "Availability heuristic",
                  "Halo effect"
                ],
                correctAnswer: 2,
                explanation: "The availability heuristic causes people to judge likelihood based on how easily examples come to mind. Dramatic events are memorable and seem more common than they are.",
                hint: "The shark attack example is easily 'available' in his memory, affecting his judgment.",
              },
              {
                id: "q3",
                question: "A restaurant describes a burger as '75% lean beef' instead of '25% fat beef.' This is an example of:",
                options: [
                  "Framing effect",
                  "Bandwagon effect",
                  "Anchoring",
                  "Halo effect"
                ],
                correctAnswer: 0,
                explanation: "The framing effect shows how the same information presented differently affects perception. '75% lean' sounds more appealing than '25% fat' despite being identical.",
                hint: "The same information is being 'framed' in different ways.",
              },
              {
                id: "q4",
                question: "Mike continues investing in a failing business because he's already invested $50,000. This illustrates:",
                options: [
                  "Confirmation bias",
                  "Sunk cost fallacy",
                  "Availability heuristic",
                  "Authority bias"
                ],
                correctAnswer: 1,
                explanation: "The sunk cost fallacy is continuing a course of action because of previously invested resources, even when continuing isn't rational. Past costs shouldn't affect future decisions.",
                hint: "He's trapped by costs that have already been spent and can't be recovered - they've 'sunk.'",
              },
              {
                id: "q5",
                question: "Because Emma finds the CEO of a company attractive and charismatic, she assumes all the company's products must be high quality. This is:",
                options: [
                  "Halo effect",
                  "Confirmation bias",
                  "Bandwagon effect",
                  "Anchoring"
                ],
                correctAnswer: 0,
                explanation: "The halo effect occurs when one positive quality influences overall judgment. Emma's positive impression of the CEO creates a 'halo' that makes her view everything about the company positively.",
                hint: "One positive trait creates a glowing 'halo' that affects perception of everything else.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "social-proof-marketing",
    subjectId: "business-marketing",
    title: "Social Proof",
    description: "Leveraging social influence and conformity in marketing",
    level: "Beginner",
    lessons: [
      {
        id: "social-proof-lesson-1",
        title: "The Power of Social Proof",
        components: [
          {
            id: "social-proof-l1-v1",
            title: "Introduction to Social Proof - Part 1",
            duration: "11 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Understanding why people follow the crowd.",
          },
          {
            id: "social-proof-l1-v2",
            title: "Introduction to Social Proof - Part 2",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Types of social proof and their effectiveness.",
          },
          {
            id: "social-proof-l1-article",
            title: "Social Proof in Action",
            duration: "9 min",
            type: "article",
            content: "Real-world applications of social influence.",
            articleContent: `
              <h2>Social Proof in Action</h2>
              
              <p>Social proof is the psychological phenomenon where people assume the actions of others reflect correct behavior. It's one of the most powerful influences on human behavior, especially in uncertain situations.</p>
              
              <h3>Why Social Proof Works</h3>
              
              <p>Humans are social creatures who evolved in groups. Following the group was often a survival advantage. Today, we still use others' behavior as a shortcut to decide what's right, safe, or desirable. When we're uncertain, we look to others for guidance.</p>
              
              <h3>Types of Social Proof</h3>
              
              <ul>
                <li><strong>Expert Social Proof:</strong> Endorsements from credible experts in a field. A dermatologist recommending skincare or a chef endorsing kitchen equipment carries significant weight.</li>
                
                <li><strong>Celebrity Social Proof:</strong> Famous people using or endorsing products. While not always experts, celebrities' influence comes from their status and aspirational appeal.</li>
                
                <li><strong>User Social Proof:</strong> Regular customers sharing their experiences. Reviews, testimonials, and case studies from "people like us" are highly effective.</li>
                
                <li><strong>Wisdom of the Crowd:</strong> Large numbers indicating popularity. "10 million downloads," "Best-selling," or "Most popular" signals that many others have chosen this option.</li>
                
                <li><strong>Wisdom of Friends:</strong> Recommendations from people we know personally. This is the most powerful form - we trust our friends' opinions more than any advertisement.</li>
                
                <li><strong>Certification Social Proof:</strong> Awards, badges, and seals of approval from recognized organizations. "As seen in Forbes" or "Winner of Industry Award" builds credibility.</li>
              </ul>
              
              <h3>Social Proof in Marketing</h3>
              
              <p>Effective marketing heavily incorporates social proof:</p>
              
              <ul>
                <li>Customer reviews and star ratings on product pages</li>
                <li>"Customers who bought this also bought..." recommendations</li>
                <li>Showcasing number of customers, downloads, or users</li>
                <li>Displaying real-time purchase notifications ("Sarah from Boston just bought this")</li>
                <li>User-generated content on social media</li>
                <li>Case studies and success stories</li>
                <li>Trust badges and security certifications</li>
              </ul>
              
              <h3>The Dark Side</h3>
              
              <p>Social proof can be manipulated through fake reviews, bought followers, and fraudulent testimonials. This undermines trust and can lead consumers to make poor decisions. Authentic social proof is always more effective long-term.</p>
            `,
          },
          {
            id: "social-proof-l1-v3",
            title: "Reviews, Ratings, and Testimonials",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "How customer feedback influences purchasing decisions.",
          },
          {
            id: "social-proof-l1-quiz",
            title: "Quiz: Social Proof Fundamentals",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Social proof is most effective when people are:",
                options: [
                  "Completely confident in their decision",
                  "Uncertain about what to do",
                  "Experts in the subject",
                  "Ignoring others"
                ],
                correctAnswer: 1,
                explanation: "Social proof is most powerful in situations of uncertainty. When people don't know what to do, they look to others' behavior for guidance.",
                hint: "When are you most likely to see what others are doing before making your own choice?",
              },
              {
                id: "q2",
                question: "Which type of social proof is typically the MOST influential?",
                options: [
                  "Celebrity endorsements",
                  "Expert recommendations",
                  "Recommendations from friends and family",
                  "Number of total users"
                ],
                correctAnswer: 2,
                explanation: "Recommendations from people we know personally are the most powerful form of social proof because we trust our friends' opinions and experiences more than any other source.",
                hint: "Who do you trust most - a celebrity, an expert, your best friend, or statistics?",
              },
              {
                id: "q3",
                question: "A website displays 'Over 5 million satisfied customers' to build trust. This is an example of:",
                options: [
                  "Expert social proof",
                  "Celebrity social proof",
                  "Wisdom of the crowd",
                  "Certification social proof"
                ],
                correctAnswer: 2,
                explanation: "Wisdom of the crowd uses large numbers to show that many people have chosen this option. The assumption is that if millions chose it, it must be good.",
                hint: "This is about showing how many people in the 'crowd' have made this choice.",
              },
              {
                id: "q4",
                question: "What's the main risk of social proof in modern marketing?",
                options: [
                  "It's too expensive to implement",
                  "It can be manipulated through fake reviews and testimonials",
                  "It only works on young people",
                  "It's illegal in most countries"
                ],
                correctAnswer: 1,
                explanation: "The dark side of social proof is that it can be faked through purchased reviews, fake testimonials, and bought followers, which undermines trust and can mislead consumers.",
                hint: "Think about the problem of fake reviews on e-commerce sites.",
              },
              {
                id: "q5",
                question: "A skincare brand features a dermatologist explaining why their product works. This uses:",
                options: [
                  "Wisdom of the crowd",
                  "User social proof",
                  "Expert social proof",
                  "Celebrity social proof"
                ],
                correctAnswer: 2,
                explanation: "Expert social proof involves endorsements from credible experts in a relevant field. A dermatologist is an expert in skin care, making their endorsement particularly persuasive.",
                hint: "Dermatologists are experts in skin health. What type of proof involves experts?",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // ORGANIZATIONAL / WORKPLACE PSYCHOLOGY
  // ============================================================
  
  {
    id: "industrial-organizational-psychology",
    subjectId: "organizational-workplace",
    title: "Industrial and Organizational Psychology",
    description: "Applying psychology to workplace behavior and organizational effectiveness",
    level: "Beginner",
    lessons: [
      {
        id: "io-psych-lesson-1",
        title: "Introduction to I/O Psychology",
        components: [
          {
            id: "io-psych-l1-v1",
            title: "What is I/O Psychology? - Part 1",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Overview of industrial and organizational psychology as a field.",
          },
          {
            id: "io-psych-l1-v2",
            title: "What is I/O Psychology? - Part 2",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "The industrial side vs. organizational side of I/O psychology.",
          },
          {
            id: "io-psych-l1-article",
            title: "The Scope of I/O Psychology",
            duration: "12 min",
            type: "article",
            content: "Understanding workplace psychology and its applications.",
            articleContent: `
              <h2>The Scope of I/O Psychology</h2>
              
              <p>Industrial and Organizational (I/O) Psychology applies psychological principles to workplace settings. It's one of the fastest-growing and most lucrative areas of psychology.</p>
              
              <h3>The Two Sides of I/O Psychology</h3>
              
              <p><strong>Industrial Side:</strong> Focuses on recruitment, selection, training, and performance appraisal.</p>
              
              <p><strong>Organizational Side:</strong> Focuses on leadership, motivation, organizational culture, and team dynamics.</p>
              
              <h3>Career Opportunities</h3>
              
              <p>I/O psychologists work in consulting firms, corporate HR departments, and government agencies with salaries ranging from $70,000-$250,000+.</p>
            `,
          },
          {
            id: "io-psych-l1-v3",
            title: "Selection and Assessment",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "How I/O psychologists help organizations hire better.",
          },
          {
            id: "io-psych-l1-quiz",
            title: "Quiz: I/O Psychology Fundamentals",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "The 'Industrial' side of I/O psychology primarily focuses on:",
                options: [
                  "Organizational culture",
                  "Individual workers and personnel processes",
                  "Executive leadership",
                  "Manufacturing"
                ],
                correctAnswer: 1,
                explanation: "The industrial side focuses on individual workers through recruitment, selection, training, and performance appraisal.",
                hint: "This side deals with individual employees and personnel processes.",
              },
              {
                id: "q2",
                question: "Which is part of the 'Organizational' side?",
                options: [
                  "Job analysis",
                  "Performance appraisal",
                  "Leadership development",
                  "Compensation design"
                ],
                correctAnswer: 2,
                explanation: "Leadership development is part of the organizational side, which focuses on how organizations function.",
                hint: "The organizational side looks at group and organizational level phenomena.",
              },
              {
                id: "q3",
                question: "Typical salary range for I/O psychologists with a master's degree:",
                options: [
                  "$35,000-$50,000",
                  "$70,000-$120,000",
                  "$200,000-$300,000",
                  "$500,000+"
                ],
                correctAnswer: 1,
                explanation: "I/O psychologists with master's degrees typically earn $70,000-$120,000.",
                hint: "I/O psychology offers higher compensation than many other psychology fields.",
              },
              {
                id: "q4",
                question: "Creating systems to evaluate employee performance is:",
                options: [
                  "Employee selection",
                  "Performance management",
                  "Job analysis",
                  "Recruitment"
                ],
                correctAnswer: 1,
                explanation: "Performance management involves creating systems to evaluate and improve employee performance.",
                hint: "This is about managing performance, not hiring.",
              },
              {
                id: "q5",
                question: "Why do companies invest in I/O psychology?",
                options: [
                  "It's legally required",
                  "Better employee satisfaction and business outcomes",
                  "It's the cheapest option",
                  "It eliminates managers"
                ],
                correctAnswer: 1,
                explanation: "Companies invest in I/O psychology because it improves both employee satisfaction and business performance.",
                hint: "Think about dual benefits for employees AND organizations.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "leadership-psychology",
    subjectId: "organizational-workplace",
    title: "Leadership Psychology",
    description: "Understanding effective leadership through psychological principles",
    level: "Intermediate",
    lessons: [
      {
        id: "leadership-lesson-1",
        title: "Foundations of Leadership",
        components: [
          {
            id: "leadership-l1-v1",
            title: "What Makes an Effective Leader? - Part 1",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/xlA0TRsQCmM",
            content: "Exploring leadership traits and behaviors.",
          },
          {
            id: "leadership-l1-v2",
            title: "What Makes an Effective Leader? - Part 2",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/u6XAPnuFjJc",
            content: "Leadership styles and situational leadership.",
          },
          {
            id: "leadership-l1-article",
            title: "Psychology of Leadership",
            duration: "11 min",
            type: "article",
            content: "Understanding leadership through a psychological lens.",
            articleContent: `
              <h2>Psychology of Leadership</h2>
              
              <p>Effective leadership involves understanding human motivation, group dynamics, and influence. Psychology provides crucial insights into what makes leaders successful.</p>
              
              <h3>Leadership Theories</h3>
              
              <p><strong>Trait Theory:</strong> Certain personality traits predict leadership effectiveness.</p>
              
              <p><strong>Behavioral Theory:</strong> Specific behaviors, not just traits, make effective leaders.</p>
              
              <p><strong>Situational/Contingency Theory:</strong> Different situations require different leadership approaches.</p>
              
              <p><strong>Transformational Leadership:</strong> Leaders who inspire and motivate through vision and values.</p>
              
              <h3>Key Leadership Skills</h3>
              
              <p>Emotional intelligence, communication, decision-making, and the ability to motivate and develop others are critical leadership competencies.</p>
            `,
          },
          {
            id: "leadership-l1-v3",
            title: "Emotional Intelligence in Leadership",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/6nRQYlJKkz4",
            content: "Why EQ matters more than IQ for leaders.",
          },
          {
            id: "leadership-l1-quiz",
            title: "Quiz: Leadership Psychology",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Transformational leaders primarily focus on:",
                options: [
                  "Micromanaging tasks",
                  "Inspiring through vision and values",
                  "Punishing mistakes",
                  "Maintaining status quo"
                ],
                correctAnswer: 1,
                explanation: "Transformational leaders inspire and motivate followers through compelling vision and shared values.",
                hint: "These leaders 'transform' by inspiring with vision.",
              },
              {
                id: "q2",
                question: "Emotional intelligence in leadership refers to:",
                options: [
                  "IQ scores",
                  "Technical skills",
                  "Understanding and managing emotions",
                  "Academic achievement"
                ],
                correctAnswer: 2,
                explanation: "Emotional intelligence is the ability to understand and manage your own emotions and those of others.",
                hint: "This is about emotions, not intellect or technical skills.",
              },
              {
                id: "q3",
                question: "Situational leadership theory suggests:",
                options: [
                  "One leadership style works for everything",
                  "Different situations require different approaches",
                  "Leaders are born, not made",
                  "Leadership doesn't matter"
                ],
                correctAnswer: 1,
                explanation: "Situational leadership recognizes that different contexts and followers require adapting your leadership approach.",
                hint: "The name tells you - leadership depends on the 'situation'.",
              },
              {
                id: "q4",
                question: "Which is most important for leadership effectiveness?",
                options: [
                  "Being the smartest person",
                  "Having all the answers",
                  "Ability to motivate and develop others",
                  "Working alone"
                ],
                correctAnswer: 2,
                explanation: "Great leaders excel at motivating and developing others, not just personal brilliance.",
                hint: "Leadership is about enabling others, not solo performance.",
              },
              {
                id: "q5",
                question: "Behavioral theory of leadership focuses on:",
                options: [
                  "Personality traits",
                  "Specific actions and behaviors",
                  "Physical appearance",
                  "Family background"
                ],
                correctAnswer: 1,
                explanation: "Behavioral theory examines specific actions and behaviors that make leaders effective, which can be learned.",
                hint: "The name says it - this theory is about 'behaviors'.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
  id: "motivation-psychology",
  subjectId: "organizational-workplace",
  title: "Motivation Psychology",
  description: "How motivation works at work: theories, drivers, and practical applications",
  level: "Beginner",
  lessons: [
    {
      id: "motivation-lesson-1",
      title: "Foundations of Motivation",
      components: [
        {
          id: "motivation-l1-v1",
          title: "Motivation Psychology - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3dNlI2eFf8o",
          content: "A big‑picture introduction to motivation in the workplace.",
        },
        {
          id: "motivation-l1-v2",
          title: "Motivation Psychology - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/0bTQzZ0aQ0M",
          content: "Intrinsic vs. extrinsic motivation and why it matters at work.",
        },
        {
          id: "motivation-l1-article",
          title: "What Drives People at Work?",
          duration: "8 min",
          type: "article",
          content: "Key motivation concepts and classic theories.",
          articleContent: `
            <h2>What Drives People at Work?</h2>

            <p>Motivation is the set of forces that energize, direct, and sustain behavior. In the workplace, motivation influences performance, persistence, creativity, and well‑being.</p>

            <h3>Intrinsic vs. Extrinsic Motivation</h3>
            <p><strong>Intrinsic motivation</strong> comes from within — curiosity, enjoyment, mastery, or meaning. <strong>Extrinsic motivation</strong> comes from external outcomes like pay, bonuses, or recognition.</p>

            <h3>Classic Motivation Theories</h3>
            <ul>
              <li><strong>Maslow’s Hierarchy:</strong> Needs progress from basic survival to growth and self‑actualization</li>
              <li><strong>Herzberg’s Two‑Factor Theory:</strong> Hygiene factors prevent dissatisfaction; motivators create satisfaction</li>
              <li><strong>Expectancy Theory:</strong> Effort depends on belief that effort leads to performance and rewards</li>
            </ul>

            <h3>Why It Matters in Organizations</h3>
            <p>Motivated employees are more engaged, perform better, and are less likely to burn out. Understanding what drives people helps leaders build healthier and more effective workplaces.</p>
          `,
        },
        {
          id: "motivation-l1-v3",
          title: "Motivation Theories in Action",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7h1yqY4k8oE",
          content: "Applying motivation theories to real workplace situations.",
        },
        {
          id: "motivation-l1-quiz",
          title: "Quiz: Motivation Foundations",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Intrinsic motivation is best described as:",
              options: [
                "Working only for money",
                "Being driven by external rewards",
                "Doing an activity because it is enjoyable or meaningful",
                "Avoiding punishment"
              ],
              correctAnswer: 2,
              explanation: "Intrinsic motivation comes from enjoyment, interest, or personal meaning.",
              hint: "Think about doing something because you like it or find it meaningful.",
            },
            {
              id: "q2",
              question: "Which theory suggests that motivation depends on expected outcomes of effort?",
              options: [
                "Maslow’s Hierarchy",
                "Herzberg’s Two‑Factor Theory",
                "Expectancy Theory",
                "Equity Theory"
              ],
              correctAnswer: 2,
              explanation: "Expectancy Theory focuses on the belief that effort leads to performance and rewards.",
              hint: "It’s about what you expect will happen if you try.",
            },
            {
              id: "q3",
              question: "In Herzberg’s theory, which are more likely to increase job satisfaction?",
              options: [
                "Hygiene factors",
                "Motivators",
                "Punishments",
                "Job insecurity"
              ],
              correctAnswer: 1,
              explanation: "Motivators (like achievement and recognition) create satisfaction.",
              hint: "Which factors actually make people feel fulfilled at work?",
            },
            {
              id: "q4",
              question: "Maslow’s hierarchy suggests people are motivated to:",
              options: [
                "Only meet basic needs",
                "Only pursue self‑actualization",
                "Satisfy lower needs before higher ones",
                "Ignore social needs"
              ],
              correctAnswer: 2,
              explanation: "Maslow proposed that lower needs generally take priority before higher needs.",
              hint: "Think about the order of needs in a pyramid.",
            },
            {
              id: "q5",
              question: "Extrinsic motivation is driven by:",
              options: [
                "Personal meaning and curiosity",
                "Internal satisfaction",
                "External rewards or outcomes",
                "A sense of mastery only"
              ],
              correctAnswer: 2,
              explanation: "Extrinsic motivation is tied to external rewards like pay or recognition.",
              hint: "What comes from outside the person?",
            },
          ],
        },
      ],
    },
    {
      id: "motivation-lesson-2",
      title: "Motivation in the Workplace",
      components: [
        {
          id: "motivation-l2-v1",
          title: "Workplace Motivation - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5Y3rG9i8l2w",
          content: "How goals, feedback, and incentives shape motivation.",
        },
        {
          id: "motivation-l2-v2",
          title: "Workplace Motivation - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1c2G7P9a4kQ",
          content: "The role of autonomy, mastery, and purpose at work.",
        },
        {
          id: "motivation-l2-article",
          title: "Building Motivating Work Environments",
          duration: "9 min",
          type: "article",
          content: "How leaders and teams can design motivating workplaces.",
          articleContent: `
            <h2>Building Motivating Work Environments</h2>

            <p>Workplace motivation is influenced by job design, leadership, feedback, and organizational culture.</p>

            <h3>Key Drivers</h3>
            <ul>
              <li><strong>Autonomy:</strong> Having control over how work is done</li>
              <li><strong>Mastery:</strong> Opportunities to learn, grow, and improve</li>
              <li><strong>Purpose:</strong> Understanding why the work matters</li>
              <li><strong>Feedback:</strong> Clear information about progress and performance</li>
            </ul>

            <h3>Goal Setting</h3>
            <p>Specific, challenging, and attainable goals tend to increase performance. Goals work best when people believe they can reach them and receive feedback along the way.</p>

            <h3>Fairness and Equity</h3>
            <p>People compare their inputs and outcomes to others. Perceived unfairness can reduce motivation and increase turnover.</p>
          `,
        },
        {
          id: "motivation-l2-v3",
          title: "Motivation and Performance",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9b3K5H0yF7s",
          content: "Connecting motivation to engagement, performance, and retention.",
        },
        {
          id: "motivation-l2-quiz",
          title: "Quiz: Motivation at Work",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Which factor most directly supports intrinsic motivation at work?",
              options: [
                "Strict monitoring",
                "Autonomy",
                "Random rewards",
                "Unclear goals"
              ],
              correctAnswer: 1,
              explanation: "Autonomy supports intrinsic motivation by giving people control over their work.",
              hint: "Think about freedom and choice in how work is done.",
            },
            {
              id: "q2",
              question: "Goal‑setting theory suggests goals should be:",
              options: [
                "Vague and easy",
                "Specific and challenging",
                "Hidden from employees",
                "Always short‑term"
              ],
              correctAnswer: 1,
              explanation: "Specific, challenging goals tend to improve performance and focus.",
              hint: "What kind of goals push people while still being clear?",
            },
            {
              id: "q3",
              question: "Perceived unfairness at work is best explained by:",
              options: [
                "Maslow’s theory",
                "Equity theory",
                "Behaviorism",
                "The James‑Lange theory"
              ],
              correctAnswer: 1,
              explanation: "Equity theory focuses on fairness of inputs and outcomes.",
              hint: "Which theory is about comparisons and fairness?",
            },
            {
              id: "q4",
              question: "Which combination best supports sustained motivation?",
              options: [
                "Autonomy, mastery, and purpose",
                "Punishments and surveillance",
                "Only financial incentives",
                "Removing all feedback"
              ],
              correctAnswer: 0,
              explanation: "Autonomy, mastery, and purpose are strong drivers of long‑term motivation.",
              hint: "Think of the trio often linked to intrinsic motivation.",
            },
            {
              id: "q5",
              question: "Feedback helps motivation most when it is:",
              options: [
                "Rare and vague",
                "Immediate and specific",
                "Public and harsh",
                "Only about failures"
              ],
              correctAnswer: 1,
              explanation: "Immediate, specific feedback helps people adjust and improve.",
              hint: "What kind of feedback is most useful for learning?",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "group-dynamics",
  subjectId: "organizational-workplace",
  title: "Group Dynamics",
  description: "How groups form, function, and influence behavior at work",
  level: "Beginner",
  lessons: [
    {
      id: "group-lesson-1",
      title: "Foundations of Group Dynamics",
      components: [
        {
          id: "group-l1-v1",
          title: "Group Dynamics - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2K3P4H0u4qQ",
          content: "What group dynamics are and why they matter in organizations.",
        },
        {
          id: "group-l1-v2",
          title: "Group Dynamics - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7Q6V2e2n0iY",
          content: "Group roles, norms, and stages of development.",
        },
        {
          id: "group-l1-article",
          title: "How Groups Form and Function",
          duration: "8 min",
          type: "article",
          content: "Key concepts in group formation and behavior.",
          articleContent: `
            <h2>How Groups Form and Function</h2>

            <p>Groups influence how people think, feel, and behave. In the workplace, effective groups drive collaboration, innovation, and performance.</p>

            <h3>Stages of Group Development</h3>
            <ul>
              <li><strong>Forming:</strong> Members get to know each other and define goals</li>
              <li><strong>Storming:</strong> Conflict emerges as roles and power dynamics appear</li>
              <li><strong>Norming:</strong> Shared norms and expectations develop</li>
              <li><strong>Performing:</strong> The group functions efficiently toward goals</li>
            </ul>

            <h3>Group Roles and Norms</h3>
            <p>Roles (formal or informal) shape contributions. Norms guide acceptable behavior and can increase cohesion — or create pressure to conform.</p>

            <h3>Why Group Dynamics Matter</h3>
            <p>Strong group dynamics improve trust, communication, and shared accountability. Poor dynamics can lead to conflict, reduced performance, or groupthink.</p>
          `,
        },
        {
          id: "group-l1-v3",
          title: "Team Roles and Norms",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4m2b9k1r0tA",
          content: "How roles and norms influence collaboration and performance.",
        },
        {
          id: "group-l1-quiz",
          title: "Quiz: Group Dynamics Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Which stage of group development is most associated with conflict?",
              options: [
                "Forming",
                "Storming",
                "Norming",
                "Performing"
              ],
              correctAnswer: 1,
              explanation: "Storming is the stage where conflict and power struggles often emerge.",
              hint: "Think of the stage that sounds like turbulence.",
            },
            {
              id: "q2",
              question: "Group norms are:",
              options: [
                "Formal job titles",
                "Unspoken rules that guide behavior",
                "A type of performance review",
                "A leadership style"
              ],
              correctAnswer: 1,
              explanation: "Norms are shared expectations about how group members should behave.",
              hint: "They’re not always written down but still influence behavior.",
            },
            {
              id: "q3",
              question: "A key benefit of strong group cohesion is:",
              options: [
                "Less communication",
                "More trust and cooperation",
                "More competition among members",
                "Less accountability"
              ],
              correctAnswer: 1,
              explanation: "Cohesion tends to increase trust and collaboration.",
              hint: "Cohesion means people feel connected.",
            },
            {
              id: "q4",
              question: "Group roles can be:",
              options: [
                "Only assigned by managers",
                "Only informal",
                "Formal or informal",
                "Not influenced by task needs"
              ],
              correctAnswer: 2,
              explanation: "Roles can be assigned formally or emerge informally.",
              hint: "Think about both job titles and unofficial responsibilities.",
            },
            {
              id: "q5",
              question: "Which outcome is associated with poor group dynamics?",
              options: [
                "Increased psychological safety",
                "Higher innovation",
                "Groupthink and reduced performance",
                "More effective decision‑making"
              ],
              correctAnswer: 2,
              explanation: "Poor dynamics can lead to groupthink, conflict, and lower performance.",
              hint: "Think about what happens when dissent is discouraged.",
            },
          ],
        },
      ],
    },
    {
      id: "group-lesson-2",
      title: "Influence, Conflict, and Decision‑Making",
      components: [
        {
          id: "group-l2-v1",
          title: "Group Influence - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1f9Q9i7L8wQ",
          content: "How conformity, social influence, and leadership shape group behavior.",
        },
        {
          id: "group-l2-v2",
          title: "Group Influence - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5c0p4s8d6nU",
          content: "Understanding conflict styles and how to manage them.",
        },
        {
          id: "group-l2-article",
          title: "Decision‑Making in Groups",
          duration: "9 min",
          type: "article",
          content: "How groups make decisions and the risks they face.",
          articleContent: `
            <h2>Decision‑Making in Groups</h2>

            <p>Groups can make better decisions than individuals when they share information and challenge assumptions. But group decisions are also vulnerable to bias and conformity.</p>

            <h3>Common Group Influences</h3>
            <ul>
              <li><strong>Conformity:</strong> Adjusting opinions to match the group</li>
              <li><strong>Social Loafing:</strong> Reduced effort when responsibility is shared</li>
              <li><strong>Groupthink:</strong> Prioritizing harmony over critical evaluation</li>
            </ul>

            <h3>Healthy Conflict</h3>
            <p>Task conflict can improve outcomes when managed respectfully. Personal conflict, however, often damages trust and performance.</p>

            <h3>Better Group Decisions</h3>
            <p>Encouraging diverse viewpoints, using structured decision processes, and creating psychological safety can reduce bias and improve outcomes.</p>
          `,
        },
        {
          id: "group-l2-v3",
          title: "Conflict and Collaboration",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/8w6m2R0p3gI",
          content: "Strategies for managing conflict and improving group decisions.",
        },
        {
          id: "group-l2-quiz",
          title: "Quiz: Group Influence and Decisions",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Groupthink occurs when a group:",
              options: [
                "Encourages diverse viewpoints",
                "Prioritizes harmony over critical evaluation",
                "Uses structured decision rules",
                "Invites external feedback"
              ],
              correctAnswer: 1,
              explanation: "Groupthink happens when maintaining harmony becomes more important than critical thinking.",
              hint: "Think about a group avoiding disagreement at all costs.",
            },
            {
              id: "q2",
              question: "Social loafing is:",
              options: [
                "Working harder in a group",
                "Reducing effort when responsibility is shared",
                "Taking leadership of a group",
                "Resolving conflict quickly"
              ],
              correctAnswer: 1,
              explanation: "Social loafing is reduced effort when people feel less individually accountable.",
              hint: "It’s the opposite of individual accountability.",
            },
            {
              id: "q3",
              question: "Which type of conflict can improve decisions when managed well?",
              options: [
                "Personal conflict",
                "Relationship conflict",
                "Task conflict",
                "Status conflict"
              ],
              correctAnswer: 2,
              explanation: "Task conflict involves differences in ideas and can improve decision quality.",
              hint: "Which conflict is about the work itself, not the people?",
            },
            {
              id: "q4",
              question: "Psychological safety in groups means:",
              options: [
                "Avoiding all disagreements",
                "People feel safe to speak up and take risks",
                "Only leaders can share opinions",
                "No feedback is given"
              ],
              correctAnswer: 1,
              explanation: "Psychological safety means members feel safe to express ideas and concerns.",
              hint: "Think about feeling safe to speak honestly.",
            },
            {
              id: "q5",
              question: "One strategy to improve group decisions is to:",
              options: [
                "Suppress minority opinions",
                "Encourage diverse perspectives",
                "Avoid feedback",
                "Keep decisions informal and unstructured"
              ],
              correctAnswer: 1,
              explanation: "Diverse perspectives reduce bias and improve decision quality.",
              hint: "More viewpoints usually lead to better choices.",
            },
          ],
        },
      ],
    },
  ],
},



  // ============================================================
  // EDUCATIONAL PSYCHOLOGY
  // ============================================================
  
  {
    id: "educational-psychology",
    subjectId: "educational-psychology",
    title: "Educational Psychology",
    description: "Applying psychological principles to teaching and learning",
    level: "Beginner",
    lessons: [
      {
        id: "ed-psych-lesson-1",
        title: "Introduction to Educational Psychology",
        components: [
          {
            id: "ed-psych-l1-v1",
            title: "What is Educational Psychology? - Part 1",
            duration: "12 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Overview of how psychology applies to education.",
          },
          {
            id: "ed-psych-l1-v2",
            title: "What is Educational Psychology? - Part 2",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Key theories of learning and development.",
          },
          {
            id: "ed-psych-l1-article",
            title: "Understanding Learning Processes",
            duration: "11 min",
            type: "article",
            content: "How people learn and retain information.",
            articleContent: `
              <h2>Understanding Learning Processes</h2>
              
              <p>Educational psychology examines how people learn and what teaching methods are most effective. This knowledge helps educators create better learning experiences.</p>
              
              <h3>Major Learning Theories</h3>
              
              <p><strong>Behaviorism:</strong> Learning occurs through conditioning and reinforcement.</p>
              
              <p><strong>Cognitivism:</strong> Learning involves mental processes like attention, memory, and problem-solving.</p>
              
              <p><strong>Constructivism:</strong> Learners actively construct knowledge through experience.</p>
              
              <p><strong>Social Learning Theory:</strong> People learn by observing others.</p>
              
              <h3>Applications</h3>
              
              <p>Educational psychologists help design curricula, improve teaching methods, address learning difficulties, and create effective assessment systems.</p>
            `,
          },
          {
            id: "ed-psych-l1-v3",
            title: "Motivation in Learning",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "Understanding what drives student engagement.",
          },
          {
            id: "ed-psych-l1-quiz",
            title: "Quiz: Educational Psychology Basics",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Which learning theory emphasizes observation and modeling?",
                options: [
                  "Behaviorism",
                  "Social Learning Theory",
                  "Constructivism",
                  "Cognitivism"
                ],
                correctAnswer: 1,
                explanation: "Social Learning Theory, developed by Albert Bandura, emphasizes learning through observation of others.",
                hint: "This theory is about learning from others in 'social' contexts.",
              },
              {
                id: "q2",
                question: "Constructivism suggests that learners:",
                options: [
                  "Passively receive information",
                  "Actively construct knowledge through experience",
                  "Only learn through rewards",
                  "Cannot learn independently"
                ],
                correctAnswer: 1,
                explanation: "Constructivism views learners as active participants who construct their own understanding through experiences.",
                hint: "Learners 'construct' their own knowledge.",
              },
              {
                id: "q3",
                question: "Behaviorism focuses on:",
                options: [
                  "Internal thought processes",
                  "Observable behaviors and reinforcement",
                  "Emotions only",
                  "Social relationships"
                ],
                correctAnswer: 1,
                explanation: "Behaviorism focuses on observable behaviors and how they're shaped through reinforcement and punishment.",
                hint: "This theory is about observable 'behavior', not internal thoughts.",
              },
              {
                id: "q4",
                question: "What do educational psychologists help with?",
                options: [
                  "Only testing students",
                  "Designing curricula and improving teaching methods",
                  "Building schools",
                  "Managing school finances"
                ],
                correctAnswer: 1,
                explanation: "Educational psychologists apply psychological principles to improve teaching methods, curricula, and learning outcomes.",
                hint: "They apply psychology to improve education and learning.",
              },
              {
                id: "q5",
                question: "Cognitivism emphasizes:",
                options: [
                  "Only observable behaviors",
                  "Mental processes like attention and memory",
                  "Emotional development only",
                  "Physical development"
                ],
                correctAnswer: 1,
                explanation: "Cognitivism focuses on internal mental processes like attention, memory, problem-solving, and thinking.",
                hint: "This theory is about 'cognitive' or mental processes.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "learning-theory",
    subjectId: "educational-psychology",
    title: "Learning Theory",
    description: "Understanding how people acquire knowledge and skills",
    level: "Intermediate",
    lessons: [
      {
        id: "learning-theory-lesson-1",
        title: "Major Learning Theories",
        components: [
          {
            id: "learning-theory-l1-v1",
            title: "Classical and Operant Conditioning - Part 1",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/xlA0TRsQCmM",
            content: "How conditioning shapes learning and behavior.",
          },
          {
            id: "learning-theory-l1-v2",
            title: "Classical and Operant Conditioning - Part 2",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/u6XAPnuFjJc",
            content: "Reinforcement schedules and their effects.",
          },
          {
            id: "learning-theory-l1-article",
            title: "Theories of Learning",
            duration: "12 min",
            type: "article",
            content: "Comprehensive overview of learning theories.",
            articleContent: `
              <h2>Theories of Learning</h2>
              
              <p>Understanding how people learn is fundamental to effective education. Different theories offer different perspectives on the learning process.</p>
              
              <h3>Classical Conditioning</h3>
              
              <p>Pavlov's work showed how associations between stimuli create learned responses. This explains many automatic reactions and emotional responses.</p>
              
              <h3>Operant Conditioning</h3>
              
              <p>Skinner demonstrated that consequences shape behavior. Reinforcement increases behaviors while punishment decreases them.</p>
              
              <h3>Cognitive Learning</h3>
              
              <p>This approach examines mental processes involved in learning, including attention, encoding, storage, and retrieval of information.</p>
              
              <h3>Social Cognitive Theory</h3>
              
              <p>Bandura showed that people learn through observation, imitation, and modeling, not just direct experience.</p>
            `,
          },
          {
            id: "learning-theory-l1-v3",
            title: "Applying Learning Theory",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/6nRQYlJKkz4",
            content: "Practical applications in education and training.",
          },
          {
            id: "learning-theory-l1-quiz",
            title: "Quiz: Learning Theories",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Who developed the theory of classical conditioning?",
                options: [
                  "Skinner",
                  "Pavlov",
                  "Bandura",
                  "Piaget"
                ],
                correctAnswer: 1,
                explanation: "Ivan Pavlov developed classical conditioning through his famous experiments with dogs.",
                hint: "This researcher worked with dogs and bells.",
              },
              {
                id: "q2",
                question: "Positive reinforcement involves:",
                options: [
                  "Removing something unpleasant",
                  "Adding something pleasant",
                  "Adding punishment",
                  "Ignoring behavior"
                ],
                correctAnswer: 1,
                explanation: "Positive reinforcement adds something pleasant to increase the likelihood of a behavior recurring.",
                hint: "It's 'positive' because you're adding something good.",
              },
              {
                id: "q3",
                question: "Which psychologist developed Social Cognitive Theory?",
                options: [
                  "Pavlov",
                  "Skinner",
                  "Bandura",
                  "Watson"
                ],
                correctAnswer: 2,
                explanation: "Albert Bandura developed Social Cognitive Theory, emphasizing observational learning.",
                hint: "This researcher conducted the famous Bobo doll experiment.",
              },
              {
                id: "q4",
                question: "Operant conditioning was primarily developed by:",
                options: [
                  "B.F. Skinner",
                  "Ivan Pavlov",
                  "John Watson",
                  "Carl Rogers"
                ],
                correctAnswer: 0,
                explanation: "B.F. Skinner developed operant conditioning, showing how consequences shape behavior.",
                hint: "This researcher worked with rats in boxes.",
              },
              {
                id: "q5",
                question: "Observational learning is central to which theory?",
                options: [
                  "Classical conditioning",
                  "Operant conditioning",
                  "Social Cognitive Theory",
                  "Psychoanalysis"
                ],
                correctAnswer: 2,
                explanation: "Social Cognitive Theory emphasizes learning through observation and modeling of others.",
                hint: "This theory focuses on learning from 'social' observation.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
  id: "memory-psychology",
  subjectId: "educational-psychology",
  title: "Memory",
  description: "How memory works and how to improve learning and retention",
  level: "Beginner",
  lessons: [
    {
      id: "memory-lesson-1",
      title: "How Memory Works",
      components: [
        {
          id: "memory-l1-v1",
          title: "Memory - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7Q1j6H6Y2kM",
          content: "An introduction to memory systems and how information is stored.",
        },
        {
          id: "memory-l1-v2",
          title: "Memory - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2y8fQ4vF5pA",
          content: "Working memory, long‑term memory, and why attention matters.",
        },
        {
          id: "memory-l1-article",
          title: "Understanding Memory Systems",
          duration: "8 min",
          type: "article",
          content: "A clear overview of key memory processes.",
          articleContent: `
            <h2>Understanding Memory Systems</h2>

            <p>Memory is the ability to encode, store, and retrieve information. In education, memory is essential for learning and long‑term retention.</p>

            <h3>Three Core Processes</h3>
            <ul>
              <li><strong>Encoding:</strong> Getting information into memory</li>
              <li><strong>Storage:</strong> Maintaining information over time</li>
              <li><strong>Retrieval:</strong> Accessing stored information when needed</li>
            </ul>

            <h3>Types of Memory</h3>
            <ul>
              <li><strong>Sensory Memory:</strong> Brief storage of incoming sensory input</li>
              <li><strong>Working Memory:</strong> Short‑term, active processing of information</li>
              <li><strong>Long‑Term Memory:</strong> Durable storage of knowledge and experiences</li>
            </ul>

            <h3>Memory and Learning</h3>
            <p>Effective learning depends on attention, meaningful encoding, and repeated retrieval over time. Strategies like spacing, elaboration, and retrieval practice strengthen memory traces.</p>
          `,
        },
        {
          id: "memory-l1-v3",
          title: "Improving Memory in Learning",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5tY7a8m4q2Q",
          content: "How strategies like spacing and retrieval practice improve memory.",
        },
        {
          id: "memory-l1-quiz",
          title: "Quiz: Memory Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Which process involves getting information into memory?",
              options: [
                "Storage",
                "Retrieval",
                "Encoding",
                "Interference"
              ],
              correctAnswer: 2,
              explanation: "Encoding is the process of getting information into memory.",
              hint: "Think about the first step in forming a memory.",
            },
            {
              id: "q2",
              question: "Working memory is best described as:",
              options: [
                "Brief sensory input storage",
                "Long‑term storage of knowledge",
                "Short‑term active processing of information",
                "A type of emotional memory only"
              ],
              correctAnswer: 2,
              explanation: "Working memory holds and manipulates information briefly.",
              hint: "It’s the mental space for thinking and problem‑solving.",
            },
            {
              id: "q3",
              question: "Which strategy is most likely to improve long‑term retention?",
              options: [
                "Cramming the night before",
                "Spacing practice over time",
                "Avoiding retrieval",
                "Reading notes once"
              ],
              correctAnswer: 1,
              explanation: "Spacing improves retention by strengthening memory over time.",
              hint: "Think about studying in multiple sessions.",
            },
            {
              id: "q4",
              question: "Retrieval practice helps learning because it:",
              options: [
                "Avoids forgetting",
                "Strengthens access to stored information",
                "Eliminates the need for understanding",
                "Works only for short‑term memory"
              ],
              correctAnswer: 1,
              explanation: "Practicing retrieval strengthens memory and makes recall easier.",
              hint: "It’s about pulling information out of memory.",
            },
            {
              id: "q5",
              question: "Sensory memory is:",
              options: [
                "Long‑term storage",
                "Brief storage of sensory input",
                "Conscious problem‑solving",
                "The same as working memory"
              ],
              correctAnswer: 1,
              explanation: "Sensory memory briefly holds incoming sensory information.",
              hint: "It’s the very first, fleeting stage.",
            },
          ],
        },
      ],
    },
    {
      id: "memory-lesson-2",
      title: "Memory Challenges and Strategies",
      components: [
        {
          id: "memory-l2-v1",
          title: "Memory Challenges - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/8m3v2q1L0gE",
          content: "Why we forget: interference, decay, and overload.",
        },
        {
          id: "memory-l2-v2",
          title: "Memory Challenges - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4a7Q2m8k9pU",
          content: "How attention, sleep, and stress affect memory.",
        },
        {
          id: "memory-l2-article",
          title: "Beating Forgetting",
          duration: "9 min",
          type: "article",
          content: "Practical strategies to improve retention and recall.",
          articleContent: `
            <h2>Beating Forgetting</h2>

            <p>Forgetting is normal, but specific strategies can reduce memory loss and improve learning outcomes.</p>

            <h3>Why We Forget</h3>
            <ul>
              <li><strong>Interference:</strong> New information competes with old information</li>
              <li><strong>Decay:</strong> Memory traces weaken without use</li>
              <li><strong>Overload:</strong> Too much information at once overwhelms working memory</li>
            </ul>

            <h3>Evidence‑Based Strategies</h3>
            <ul>
              <li><strong>Spacing:</strong> Review material across multiple sessions</li>
              <li><strong>Retrieval Practice:</strong> Test yourself rather than rereading</li>
              <li><strong>Elaboration:</strong> Connect new ideas to what you already know</li>
              <li><strong>Interleaving:</strong> Mix related topics to strengthen discrimination</li>
            </ul>

            <h3>Healthy Habits</h3>
            <p>Sleep, stress management, and focused attention all support memory consolidation and learning.</p>
          `,
        },
        {
          id: "memory-l2-v3",
          title: "Memory Strategies for Learners",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6r2t8k1Q9oA",
          content: "Applying memory strategies in real study routines.",
        },
        {
          id: "memory-l2-quiz",
          title: "Quiz: Memory Strategies",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Interference refers to:",
              options: [
                "A memory method that boosts retention",
                "Competition between old and new information",
                "The decay of physical brain tissue",
                "A type of working memory"
              ],
              correctAnswer: 1,
              explanation: "Interference happens when information competes and disrupts recall.",
              hint: "Think about memories getting in each other’s way.",
            },
            {
              id: "q2",
              question: "Which strategy is best for long‑term learning?",
              options: [
                "Repeated rereading in one session",
                "Spacing study across time",
                "Avoiding testing yourself",
                "Studying while distracted"
              ],
              correctAnswer: 1,
              explanation: "Spacing practice across time improves long‑term retention.",
              hint: "Multiple sessions beat cramming.",
            },
            {
              id: "q3",
              question: "Elaboration improves memory by:",
              options: [
                "Reducing attention demands",
                "Connecting new ideas to prior knowledge",
                "Avoiding understanding",
                "Replacing retrieval practice"
              ],
              correctAnswer: 1,
              explanation: "Elaboration strengthens memory by creating richer connections.",
              hint: "It’s about linking new ideas to what you already know.",
            },
            {
              id: "q4",
              question: "Which habit supports memory consolidation?",
              options: [
                "Sleep",
                "Skipping breaks",
                "Multitasking",
                "High stress"
              ],
              correctAnswer: 0,
              explanation: "Sleep supports consolidation and strengthens memories.",
              hint: "It happens most when you’re resting.",
            },
            {
              id: "q5",
              question: "Interleaving helps because it:",
              options: [
                "Keeps topics completely separate",
                "Forces your brain to discriminate between related ideas",
                "Eliminates retrieval practice",
                "Only helps short‑term recall"
              ],
              correctAnswer: 1,
              explanation: "Interleaving improves learning by strengthening distinctions.",
              hint: "Mixing topics improves discrimination.",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "motivation-education",
  subjectId: "educational-psychology",
  title: "Motivation",
  description: "How students stay engaged and persist in learning",
  level: "Beginner",
  lessons: [
    {
      id: "edu-motivation-lesson-1",
      title: "Motivation in Learning",
      components: [
        {
          id: "edu-motivation-l1-v1",
          title: "Motivation in Education - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3b2K7q1H6wM",
          content: "Why motivation matters for learning and achievement.",
        },
        {
          id: "edu-motivation-l1-v2",
          title: "Motivation in Education - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7k2p9m4W2pQ",
          content: "Intrinsic and extrinsic motivation in student learning.",
        },
        {
          id: "edu-motivation-l1-article",
          title: "What Motivates Students?",
          duration: "8 min",
          type: "article",
          content: "Core theories of academic motivation and engagement.",
          articleContent: `
            <h2>What Motivates Students?</h2>

            <p>Motivation influences how much effort students invest, how long they persist, and how they respond to challenges.</p>

            <h3>Intrinsic vs. Extrinsic</h3>
            <p><strong>Intrinsic motivation</strong> is driven by curiosity and enjoyment. <strong>Extrinsic motivation</strong> is driven by external rewards such as grades or praise.</p>

            <h3>Key Theories</h3>
            <ul>
              <li><strong>Self‑Determination Theory:</strong> Motivation grows when autonomy, competence, and relatedness are supported</li>
              <li><strong>Expectancy‑Value Theory:</strong> Effort depends on believing you can succeed and that the task is valuable</li>
              <li><strong>Goal Orientation:</strong> Mastery goals focus on learning, while performance goals focus on proving ability</li>
            </ul>

            <h3>Motivation and Learning</h3>
            <p>Students are more engaged when they see meaning in the work, feel capable, and have some control over how they learn.</p>
          `,
        },
        {
          id: "edu-motivation-l1-v3",
          title: "Supporting Student Motivation",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1s6Q2m9r3kE",
          content: "How teachers and environments can support motivation.",
        },
        {
          id: "edu-motivation-l1-quiz",
          title: "Quiz: Motivation Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Intrinsic motivation is driven by:",
              options: [
                "Grades and rewards",
                "Enjoyment and curiosity",
                "Fear of failure",
                "External pressure"
              ],
              correctAnswer: 1,
              explanation: "Intrinsic motivation comes from interest and enjoyment.",
              hint: "Think about wanting to learn for its own sake.",
            },
            {
              id: "q2",
              question: "Self‑Determination Theory highlights which three needs?",
              options: [
                "Autonomy, competence, relatedness",
                "Grades, effort, intelligence",
                "Speed, accuracy, memory",
                "Authority, control, competition"
              ],
              correctAnswer: 0,
              explanation: "SDT emphasizes autonomy, competence, and relatedness.",
              hint: "It’s about choice, skill, and connection.",
            },
            {
              id: "q3",
              question: "Expectancy‑Value Theory says students are motivated when they:",
              options: [
                "Feel pressured",
                "Believe they can succeed and value the task",
                "Have no choices",
                "Avoid effort"
              ],
              correctAnswer: 1,
              explanation: "Motivation depends on expectancy of success and task value.",
              hint: "Two parts: belief in success and perceived value.",
            },
            {
              id: "q4",
              question: "Mastery goals focus on:",
              options: [
                "Proving ability to others",
                "Learning and improvement",
                "Avoiding mistakes",
                "Competing for grades"
              ],
              correctAnswer: 1,
              explanation: "Mastery goals are about learning and growth.",
              hint: "It’s about getting better, not looking better.",
            },
            {
              id: "q5",
              question: "A classroom that supports autonomy is likely to:",
              options: [
                "Offer meaningful choices",
                "Avoid feedback",
                "Use only rewards",
                "Discourage questions"
              ],
              correctAnswer: 0,
              explanation: "Autonomy support includes meaningful choice and ownership.",
              hint: "Think about giving students some control.",
            },
          ],
        },
      ],
    },
    {
      id: "edu-motivation-lesson-2",
      title: "Engagement and Persistence",
      components: [
        {
          id: "edu-motivation-l2-v1",
          title: "Engagement - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9g2b5m1C7qU",
          content: "Behavioral, cognitive, and emotional engagement.",
        },
        {
          id: "edu-motivation-l2-v2",
          title: "Engagement - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4p7m1q8V2kA",
          content: "Growth mindset, grit, and resilience in learning.",
        },
        {
          id: "edu-motivation-l2-article",
          title: "Helping Students Persist",
          duration: "9 min",
          type: "article",
          content: "How to support persistence when learning gets hard.",
          articleContent: `
            <h2>Helping Students Persist</h2>

            <p>Motivation is not just about getting started — it’s also about sticking with learning when it becomes challenging.</p>

            <h3>Types of Engagement</h3>
            <ul>
              <li><strong>Behavioral:</strong> Effort, participation, and on‑task behavior</li>
              <li><strong>Cognitive:</strong> Deep thinking and strategy use</li>
              <li><strong>Emotional:</strong> Interest, belonging, and positive feelings about learning</li>
            </ul>

            <h3>Mindset and Resilience</h3>
            <p>A growth mindset encourages students to view ability as developable. Resilience helps them recover from setbacks and persist toward goals.</p>

            <h3>Practical Supports</h3>
            <p>Clear goals, timely feedback, supportive relationships, and manageable challenge levels all increase persistence.</p>
          `,
        },
        {
          id: "edu-motivation-l2-v3",
          title: "Sustaining Motivation",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2t8m6q4J1pY",
          content: "Strategies for maintaining motivation over time.",
        },
        {
          id: "edu-motivation-l2-quiz",
          title: "Quiz: Engagement and Persistence",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Behavioral engagement refers to:",
              options: [
                "Feelings about school",
                "Participation and effort",
                "Beliefs about intelligence",
                "Test anxiety"
              ],
              correctAnswer: 1,
              explanation: "Behavioral engagement includes participation and effort.",
              hint: "Think about observable actions in class.",
            },
            {
              id: "q2",
              question: "A growth mindset emphasizes that:",
              options: [
                "Ability is fixed",
                "Ability can develop with effort",
                "Only talent matters",
                "Mistakes should be avoided"
              ],
              correctAnswer: 1,
              explanation: "Growth mindset views ability as developable through effort and strategy.",
              hint: "It’s about learning and improvement.",
            },
            {
              id: "q3",
              question: "Which is an example of cognitive engagement?",
              options: [
                "Doing homework quickly to finish",
                "Using strategies to understand a concept deeply",
                "Skipping difficult questions",
                "Only memorizing without understanding"
              ],
              correctAnswer: 1,
              explanation: "Cognitive engagement involves deep thinking and strategy use.",
              hint: "Think about mental effort and strategy.",
            },
            {
              id: "q4",
              question: "Which support best increases persistence?",
              options: [
                "Unclear goals",
                "No feedback",
                "Timely, specific feedback",
                "High stakes only"
              ],
              correctAnswer: 2,
              explanation: "Timely, specific feedback helps students adjust and persist.",
              hint: "What kind of feedback helps students improve?",
            },
            {
              id: "q5",
              question: "Emotional engagement includes:",
              options: [
                "Belonging and interest",
                "Only grades",
                "Avoiding challenges",
                "Speed of completion"
              ],
              correctAnswer: 0,
              explanation: "Emotional engagement includes interest and a sense of belonging.",
              hint: "Think about positive feelings toward learning.",
            },
          ],
        },
      ],
    },
  ],
},

  // ============================================================
  // SPORTS PSYCHOLOGY
  // ============================================================
  
  {
    id: "sports-psychology",
    subjectId: "sports-psychology",
    title: "Sports Psychology",
    description: "Mental aspects of athletic performance and development",
    level: "Beginner",
    lessons: [
      {
        id: "sports-psych-lesson-1",
        title: "Introduction to Sports Psychology",
        components: [
          {
            id: "sports-psych-l1-v1",
            title: "What is Sports Psychology? - Part 1",
            duration: "12 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Understanding the mental game in athletics.",
          },
          {
            id: "sports-psych-l1-v2",
            title: "What is Sports Psychology? - Part 2",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Mental skills training for athletes.",
          },
          {
            id: "sports-psych-l1-article",
            title: "The Mental Side of Performance",
            duration: "10 min",
            type: "article",
            content: "How psychology enhances athletic performance.",
            articleContent: `
              <h2>The Mental Side of Performance</h2>
              
              <p>Sports psychology focuses on how psychological factors affect athletic performance and how participation in sports affects psychological development.</p>
              
              <h3>Key Areas</h3>
              
              <p><strong>Performance Enhancement:</strong> Using mental techniques to optimize performance.</p>
              
              <p><strong>Mental Toughness:</strong> Developing resilience and ability to perform under pressure.</p>
              
              <p><strong>Focus and Concentration:</strong> Training attention and avoiding distractions.</p>
              
              <p><strong>Confidence Building:</strong> Developing self-belief and positive self-talk.</p>
              
              <h3>Applications</h3>
              
              <p>Sports psychologists work with athletes on visualization, goal-setting, stress management, and recovery from injury.</p>
            `,
          },
          {
            id: "sports-psych-l1-v3",
            title: "Visualization and Mental Imagery",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "Using mental rehearsal to improve performance.",
          },
          {
            id: "sports-psych-l1-quiz",
            title: "Quiz: Sports Psychology Fundamentals",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Mental imagery in sports involves:",
                options: [
                  "Physical practice only",
                  "Visualizing successful performance",
                  "Ignoring thoughts",
                  "Avoiding preparation"
                ],
                correctAnswer: 1,
                explanation: "Mental imagery involves vividly imagining successful performance to enhance actual performance.",
                hint: "Athletes create mental 'images' of successful performance.",
              },
              {
                id: "q2",
                question: "Sports psychologists primarily help athletes with:",
                options: [
                  "Physical training only",
                  "Mental skills and psychological factors",
                  "Nutrition planning",
                  "Equipment selection"
                ],
                correctAnswer: 1,
                explanation: "Sports psychologists focus on mental skills, motivation, confidence, and psychological aspects of performance.",
                hint: "They're psychologists, so they focus on mental aspects.",
              },
              {
                id: "q3",
                question: "Mental toughness refers to:",
                options: [
                  "Physical strength",
                  "Ability to perform under pressure and bounce back",
                  "Aggressive behavior",
                  "Avoiding challenges"
                ],
                correctAnswer: 1,
                explanation: "Mental toughness is the psychological resilience to perform well under pressure and recover from setbacks.",
                hint: "This is about mental strength and resilience.",
              },
              {
                id: "q4",
                question: "Positive self-talk helps athletes by:",
                options: [
                  "Making them arrogant",
                  "Building confidence and managing anxiety",
                  "Replacing physical training",
                  "Guaranteeing victory"
                ],
                correctAnswer: 1,
                explanation: "Positive self-talk builds confidence, manages anxiety, and maintains focus during performance.",
                hint: "Talking positively to yourself affects confidence and anxiety.",
              },
              {
                id: "q5",
                question: "Goal-setting in sports psychology should be:",
                options: [
                  "Vague and general",
                  "Specific, measurable, and achievable",
                  "Focused only on winning",
                  "Avoided completely"
                ],
                correctAnswer: 1,
                explanation: "Effective goals are specific, measurable, achievable, relevant, and time-bound (SMART goals).",
                hint: "Think about what makes goals effective in any context.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
  id: "performance-anxiety",
  subjectId: "sports-psychology",
  title: "Performance Anxiety",
  description: "Understanding and managing anxiety before and during competition",
  level: "Beginner",
  lessons: [
    {
      id: "performance-anxiety-lesson-1",
      title: "What Performance Anxiety Is",
      components: [
        {
          id: "pa-l1-v1",
          title: "Performance Anxiety - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6t2x0p8Q5mE",
          content: "An introduction to performance anxiety and how it affects athletes.",
        },
        {
          id: "pa-l1-v2",
          title: "Performance Anxiety - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1p7k4m2W9aQ",
          content: "The mental and physical symptoms of performance anxiety.",
        },
        {
          id: "pa-l1-article",
          title: "Understanding Performance Anxiety",
          duration: "8 min",
          type: "article",
          content: "Why anxiety happens and how it shows up in sport.",
          articleContent: `
            <h2>Understanding Performance Anxiety</h2>

            <p>Performance anxiety is a fear or worry about not performing well in a competitive situation. It can affect concentration, confidence, and physical coordination.</p>

            <h3>Common Symptoms</h3>
            <ul>
              <li><strong>Cognitive:</strong> Worry, negative self‑talk, fear of mistakes</li>
              <li><strong>Emotional:</strong> Tension, irritability, feeling overwhelmed</li>
              <li><strong>Physical:</strong> Increased heart rate, sweaty palms, muscle tightness</li>
            </ul>

            <h3>Why It Happens</h3>
            <p>Pressure to perform, fear of evaluation, and perfectionism can increase anxiety. A moderate amount of arousal can help performance, but too much can interfere.</p>

            <h3>Performance vs. Outcome Focus</h3>
            <p>Shifting focus from outcome (winning) to process (execution) often reduces anxiety and improves results.</p>
          `,
        },
        {
          id: "pa-l1-v3",
          title: "Arousal and Performance",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4k2p7m9L1oA",
          content: "How arousal levels affect performance and what helps athletes stay balanced.",
        },
        {
          id: "pa-l1-quiz",
          title: "Quiz: Performance Anxiety Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Performance anxiety is most accurately described as:",
              options: [
                "A physical injury",
                "A fear of not performing well",
                "A lack of talent",
                "A type of muscle fatigue"
              ],
              correctAnswer: 1,
              explanation: "Performance anxiety is worry or fear about performance under pressure.",
              hint: "Think about anxiety related to competition or evaluation.",
            },
            {
              id: "q2",
              question: "Which is a common physical symptom of performance anxiety?",
              options: [
                "Improved vision",
                "Sweaty palms and muscle tightness",
                "Increased flexibility",
                "Reduced heart rate"
              ],
              correctAnswer: 1,
              explanation: "Anxiety often leads to physical arousal like sweaty palms and tension.",
              hint: "Think of stress responses in the body.",
            },
            {
              id: "q3",
              question: "Moderate arousal can:",
              options: [
                "Always harm performance",
                "Help performance if managed well",
                "Eliminate the need for practice",
                "Prevent focus"
              ],
              correctAnswer: 1,
              explanation: "A moderate level of arousal can improve performance for many athletes.",
              hint: "Too little and too much both cause problems.",
            },
            {
              id: "q4",
              question: "A process focus emphasizes:",
              options: [
                "Winning at all costs",
                "Executing skills and routines",
                "Comparing to others",
                "Avoiding feedback"
              ],
              correctAnswer: 1,
              explanation: "Process focus centers on actions and execution rather than outcomes.",
              hint: "Think about what you can control during performance.",
            },
            {
              id: "q5",
              question: "Negative self‑talk is best categorized as a:",
              options: [
                "Cognitive symptom",
                "Physical symptom",
                "Technical skill",
                "Team strategy"
              ],
              correctAnswer: 0,
              explanation: "Negative self‑talk is a cognitive symptom of anxiety.",
              hint: "It happens in the mind rather than the body.",
            },
          ],
        },
      ],
    },
    {
      id: "performance-anxiety-lesson-2",
      title: "Managing Anxiety in Competition",
      components: [
        {
          id: "pa-l2-v1",
          title: "Managing Anxiety - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/8b1m4q2N6tE",
          content: "Breathing, grounding, and focus techniques before competition.",
        },
        {
          id: "pa-l2-v2",
          title: "Managing Anxiety - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3m7p1k6V9sQ",
          content: "Pre‑performance routines and confidence building.",
        },
        {
          id: "pa-l2-article",
          title: "Tools for Calmer Performance",
          duration: "9 min",
          type: "article",
          content: "Practical strategies to reduce performance anxiety.",
          articleContent: `
            <h2>Tools for Calmer Performance</h2>

            <p>Performance anxiety can be managed with skills that regulate arousal and improve focus.</p>

            <h3>Effective Techniques</h3>
            <ul>
              <li><strong>Controlled Breathing:</strong> Slows heart rate and reduces tension</li>
              <li><strong>Grounding:</strong> Bringing attention to the present moment</li>
              <li><strong>Positive Self‑Talk:</strong> Replacing fear statements with constructive cues</li>
              <li><strong>Imagery:</strong> Visualizing calm and successful performance</li>
            </ul>

            <h3>Pre‑Performance Routines</h3>
            <p>Consistent routines help athletes feel prepared and confident, reducing uncertainty and anxiety.</p>
          `,
        },
        {
          id: "pa-l2-v3",
          title: "Confidence Under Pressure",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2w9m5q4H7rA",
          content: "Building confidence and staying composed during high‑pressure moments.",
        },
        {
          id: "pa-l2-quiz",
          title: "Quiz: Managing Performance Anxiety",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Controlled breathing helps by:",
              options: [
                "Increasing heart rate",
                "Reducing physical arousal",
                "Making muscles tighter",
                "Stopping all emotions"
              ],
              correctAnswer: 1,
              explanation: "Controlled breathing reduces arousal and helps calm the body.",
              hint: "It slows the stress response.",
            },
            {
              id: "q2",
              question: "Grounding techniques are used to:",
              options: [
                "Ignore the present moment",
                "Bring attention to the here and now",
                "Increase worry about results",
                "Avoid preparation"
              ],
              correctAnswer: 1,
              explanation: "Grounding brings attention back to the present moment.",
              hint: "It’s about what’s happening right now.",
            },
            {
              id: "q3",
              question: "A pre‑performance routine is useful because it:",
              options: [
                "Eliminates the need for practice",
                "Creates consistency and confidence",
                "Increases uncertainty",
                "Focuses only on outcomes"
              ],
              correctAnswer: 1,
              explanation: "Routines create stability and reduce anxiety.",
              hint: "Think about predictability before competing.",
            },
            {
              id: "q4",
              question: "Positive self‑talk is best described as:",
              options: [
                "Ignoring all mistakes",
                "Replacing negative thoughts with helpful cues",
                "Only thinking about winning",
                "Avoiding feedback"
              ],
              correctAnswer: 1,
              explanation: "Positive self‑talk replaces negative thoughts with constructive cues.",
              hint: "It’s about what you say to yourself.",
            },
            {
              id: "q5",
              question: "Imagery helps performance anxiety by:",
              options: [
                "Increasing fear",
                "Visualizing calm and successful execution",
                "Replacing physical training",
                "Focusing only on opponents"
              ],
              correctAnswer: 1,
              explanation: "Imagery builds confidence and reduces anxiety by rehearsing success.",
              hint: "It’s mental practice of calm performance.",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "mental-conditioning",
  subjectId: "sports-psychology",
  title: "Mental Conditioning",
  description: "Building focus, resilience, and mental toughness in athletes",
  level: "Beginner",
  lessons: [
    {
      id: "mental-conditioning-lesson-1",
      title: "Mental Skills for Athletes",
      components: [
        {
          id: "mc-l1-v1",
          title: "Mental Conditioning - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5m2p9q1K6tY",
          content: "Core mental skills that support performance.",
        },
        {
          id: "mc-l1-v2",
          title: "Mental Conditioning - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1r8m3q6V2sU",
          content: "Focus, attention control, and staying in the moment.",
        },
        {
          id: "mc-l1-article",
          title: "The Mental Side of Performance",
          duration: "8 min",
          type: "article",
          content: "How psychological skills support consistent performance.",
          articleContent: `
            <h2>The Mental Side of Performance</h2>

            <p>Mental conditioning strengthens the psychological skills that help athletes perform under pressure.</p>

            <h3>Key Mental Skills</h3>
            <ul>
              <li><strong>Focus:</strong> Directing attention to the right cues</li>
              <li><strong>Confidence:</strong> Belief in ability and preparation</li>
              <li><strong>Emotional Control:</strong> Managing frustration and stress</li>
              <li><strong>Resilience:</strong> Bouncing back after setbacks</li>
            </ul>

            <h3>Training the Mind</h3>
            <p>Like physical conditioning, mental skills improve with practice. Techniques include imagery, self‑talk, goal setting, and mindfulness.</p>
          `,
        },
        {
          id: "mc-l1-v3",
          title: "Attention and Focus",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9q2m4t1H6pA",
          content: "How athletes can control attention and reduce distractions.",
        },
        {
          id: "mc-l1-quiz",
          title: "Quiz: Mental Skills",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Mental conditioning is most similar to:",
              options: [
                "Physical conditioning but for psychological skills",
                "Only visualization",
                "A substitute for practice",
                "Strict punishment routines"
              ],
              correctAnswer: 0,
              explanation: "Mental conditioning builds psychological skills much like physical training builds strength.",
              hint: "It’s training the mind the same way you train the body.",
            },
            {
              id: "q2",
              question: "Resilience refers to:",
              options: [
                "Avoiding challenges",
                "Bouncing back after setbacks",
                "Never making mistakes",
                "Ignoring feedback"
              ],
              correctAnswer: 1,
              explanation: "Resilience is the ability to recover from setbacks.",
              hint: "Think about how quickly you rebound after failure.",
            },
            {
              id: "q3",
              question: "A common mental skill technique is:",
              options: [
                "Imagery",
                "Overtraining",
                "Avoiding goals",
                "Suppressing emotions"
              ],
              correctAnswer: 0,
              explanation: "Imagery is a widely used technique for mental training.",
              hint: "It involves visualization.",
            },
            {
              id: "q4",
              question: "Attention control helps athletes by:",
              options: [
                "Focusing on irrelevant cues",
                "Reducing distractions and staying on task",
                "Ignoring preparation",
                "Only thinking about outcomes"
              ],
              correctAnswer: 1,
              explanation: "Attention control helps athletes stay focused on the right cues.",
              hint: "Think about blocking out distractions.",
            },
            {
              id: "q5",
              question: "Confidence in sport is best described as:",
              options: [
                "Belief in ability and preparation",
                "Always being the best",
                "Avoiding competition",
                "Ignoring weaknesses"
              ],
              correctAnswer: 0,
              explanation: "Confidence is belief in ability and preparation.",
              hint: "It’s about trust in your training.",
            },
          ],
        },
      ],
    },
    {
      id: "mental-conditioning-lesson-2",
      title: "Building Mental Toughness",
      components: [
        {
          id: "mc-l2-v1",
          title: "Mental Toughness - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7m1p8q4N2vE",
          content: "What mental toughness is and how it develops.",
        },
        {
          id: "mc-l2-v2",
          title: "Mental Toughness - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2n6p3m7K5wQ",
          content: "Goal setting, routines, and managing pressure.",
        },
        {
          id: "mc-l2-article",
          title: "Strengthening Mental Toughness",
          duration: "9 min",
          type: "article",
          content: "Habits and skills that build psychological endurance.",
          articleContent: `
            <h2>Strengthening Mental Toughness</h2>

            <p>Mental toughness is the ability to stay focused, confident, and resilient under pressure.</p>

            <h3>Building Blocks</h3>
            <ul>
              <li><strong>Goal Setting:</strong> Clear, specific, and challenging goals</li>
              <li><strong>Routines:</strong> Consistent habits that reduce uncertainty</li>
              <li><strong>Mindfulness:</strong> Awareness of thoughts without being controlled by them</li>
              <li><strong>Adaptive Self‑Talk:</strong> Reframing negative thoughts into helpful cues</li>
            </ul>

            <h3>Pressure as a Skill</h3>
            <p>Pressure is part of sport. Athletes build toughness by practicing under simulated pressure and learning to recover quickly from mistakes.</p>
          `,
        },
        {
          id: "mc-l2-v3",
          title: "Training Under Pressure",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4p8m2q1T6yA",
          content: "How to train mental toughness in practice and competition.",
        },
        {
          id: "mc-l2-quiz",
          title: "Quiz: Mental Toughness",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Mental toughness is best defined as:",
              options: [
                "Ignoring mistakes",
                "Staying focused and resilient under pressure",
                "Always winning",
                "Avoiding difficult situations"
              ],
              correctAnswer: 1,
              explanation: "Mental toughness is the ability to remain focused and resilient under pressure.",
              hint: "It’s about performance in tough moments.",
            },
            {
              id: "q2",
              question: "Which habit helps reduce uncertainty before competition?",
              options: [
                "Avoiding routines",
                "Consistent pre‑performance routines",
                "Changing strategy every time",
                "Ignoring goals"
              ],
              correctAnswer: 1,
              explanation: "Routines increase predictability and confidence.",
              hint: "Think about repeating the same preparation steps.",
            },
            {
              id: "q3",
              question: "Mindfulness helps athletes by:",
              options: [
                "Eliminating all emotions",
                "Increasing awareness without judgment",
                "Focusing only on outcomes",
                "Ignoring mistakes"
              ],
              correctAnswer: 1,
              explanation: "Mindfulness builds awareness and helps athletes avoid being controlled by thoughts.",
              hint: "It’s about noticing thoughts without getting stuck in them.",
            },
            {
              id: "q4",
              question: "Adaptive self‑talk is used to:",
              options: [
                "Make thoughts more negative",
                "Replace unhelpful thoughts with constructive cues",
                "Avoid responsibility",
                "Only focus on opponents"
              ],
              correctAnswer: 1,
              explanation: "Adaptive self‑talk replaces negative thoughts with constructive cues.",
              hint: "Think of encouraging or instructional phrases.",
            },
            {
              id: "q5",
              question: "Practicing under pressure helps athletes because it:",
              options: [
                "Eliminates pressure",
                "Builds coping skills for real competition",
                "Replaces physical training",
                "Guarantees winning"
              ],
              correctAnswer: 1,
              explanation: "Practicing under pressure builds coping skills and resilience.",
              hint: "It prepares you for the real thing.",
            },
          ],
        },
      ],
    },
  ],
},

  // ============================================================
  // FORENSIC PSYCHOLOGY
  // ============================================================
  
  {
    id: "forensic-psychology",
    subjectId: "forensic-psychology",
    title: "Forensic Psychology",
    description: "Intersection of psychology and the legal system",
    level: "Beginner",
    lessons: [
      {
        id: "forensic-lesson-1",
        title: "Introduction to Forensic Psychology",
        components: [
          {
            id: "forensic-l1-v1",
            title: "What is Forensic Psychology? - Part 1",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Psychology applied to legal and criminal justice contexts.",
          },
          {
            id: "forensic-l1-v2",
            title: "What is Forensic Psychology? - Part 2",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Roles and responsibilities of forensic psychologists.",
          },
          {
            id: "forensic-l1-article",
            title: "Psychology and Law",
            duration: "12 min",
            type: "article",
            content: "How psychology contributes to the justice system.",
            articleContent: `
              <h2>Psychology and Law</h2>
              
              <p>Forensic psychology applies psychological principles to legal and criminal justice matters. This field bridges mental health and the law.</p>
              
              <h3>Key Roles</h3>
              
              <p><strong>Criminal Evaluations:</strong> Assessing competency to stand trial and criminal responsibility.</p>
              
              <p><strong>Expert Testimony:</strong> Providing psychological expertise in court proceedings.</p>
              
              <p><strong>Profiling:</strong> Developing psychological profiles of offenders.</p>
              
              <p><strong>Treatment:</strong> Providing therapy in correctional settings.</p>
              
              <h3>Career Paths</h3>
              
              <p>Forensic psychologists work in prisons, courts, law enforcement agencies, and private practice, earning $75,000-$150,000+.</p>
            `,
          },
          {
            id: "forensic-l1-v3",
            title: "Criminal Behavior and Psychology",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "Understanding psychological factors in criminal behavior.",
          },
          {
            id: "forensic-l1-quiz",
            title: "Quiz: Forensic Psychology Basics",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Forensic psychologists often assess:",
                options: [
                  "Only mental health",
                  "Competency to stand trial",
                  "Only intelligence",
                  "Physical health"
                ],
                correctAnswer: 1,
                explanation: "Forensic psychologists frequently evaluate whether defendants are competent to stand trial and understand proceedings.",
                hint: "They assess legal competency in criminal cases.",
              },
              {
                id: "q2",
                question: "Expert testimony from forensic psychologists:",
                options: [
                  "Decides guilt or innocence",
                  "Provides psychological expertise to help courts",
                  "Replaces judges",
                  "Is always inadmissible"
                ],
                correctAnswer: 1,
                explanation: "Forensic psychologists provide expert testimony to help courts understand psychological issues relevant to cases.",
                hint: "They provide expertise to assist the court, not make final decisions.",
              },
              {
                id: "q3",
                question: "Criminal profiling involves:",
                options: [
                  "Arresting suspects",
                  "Developing psychological profiles of offenders",
                  "Determining sentences",
                  "Physical training"
                ],
                correctAnswer: 1,
                explanation: "Criminal profiling uses psychological principles to develop profiles that may help identify and understand offenders.",
                hint: "Creating psychological 'profiles' of criminals.",
              },
              {
                id: "q4",
                question: "Where do forensic psychologists typically work?",
                options: [
                  "Only universities",
                  "Courts, prisons, law enforcement agencies",
                  "Only hospitals",
                  "Only private practice"
                ],
                correctAnswer: 1,
                explanation: "Forensic psychologists work in various legal and correctional settings including courts, prisons, and law enforcement.",
                hint: "They work where psychology meets the legal system.",
              },
              {
                id: "q5",
                question: "Typical salary range for forensic psychologists:",
                options: [
                  "$30,000-$45,000",
                  "$75,000-$150,000+",
                  "$200,000-$300,000",
                  "$500,000+"
                ],
                correctAnswer: 1,
                explanation: "Forensic psychologists typically earn $75,000-$150,000+ depending on experience and setting.",
                hint: "This is a well-compensated psychology specialty.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
  id: "criminal-psychology",
  subjectId: "forensic-psychology",
  title: "Criminal Psychology",
  description: "Understanding criminal behavior, risk factors, and profiling basics",
  level: "Beginner",
  lessons: [
    {
      id: "criminal-lesson-1",
      title: "Foundations of Criminal Psychology",
      components: [
        {
          id: "criminal-l1-v1",
          title: "Criminal Psychology - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3q2m7p9L4vA",
          content: "What criminal psychology is and how it is used in forensic settings.",
        },
        {
          id: "criminal-l1-v2",
          title: "Criminal Psychology - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6t1m4q8K2nQ",
          content: "Key theories of criminal behavior and motivation.",
        },
        {
          id: "criminal-l1-article",
          title: "Why People Commit Crimes",
          duration: "8 min",
          type: "article",
          content: "Major influences on criminal behavior.",
          articleContent: `
            <h2>Why People Commit Crimes</h2>

            <p>Criminal psychology examines the thoughts, behaviors, and motivations behind criminal acts. It blends psychology, criminology, and legal concepts to understand offending.</p>

            <h3>Common Risk Factors</h3>
            <ul>
              <li><strong>Biological:</strong> Genetics, brain development, substance use</li>
              <li><strong>Psychological:</strong> Impulsivity, trauma, antisocial traits</li>
              <li><strong>Social:</strong> Peer influence, poverty, lack of supervision</li>
            </ul>

            <h3>Motivation and Opportunity</h3>
            <p>Many crimes occur when motivation and opportunity overlap. Situational factors can shape behavior just as much as long‑term traits.</p>

            <h3>Limits of Profiling</h3>
            <p>Offender profiling can be useful, but it is not a crystal ball. Profiles should guide investigation, not replace evidence.</p>
          `,
        },
        {
          id: "criminal-l1-v3",
          title: "Profiling and Risk Assessment",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2p6m8q1T5yE",
          content: "How profiling and risk assessment are used in investigations.",
        },
        {
          id: "criminal-l1-quiz",
          title: "Quiz: Criminal Psychology Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Criminal psychology focuses on:",
              options: [
                "Only legal procedures",
                "Understanding criminal behavior and motivation",
                "Medical treatment of injuries",
                "Financial auditing"
              ],
              correctAnswer: 1,
              explanation: "Criminal psychology examines the psychological factors behind crime.",
              hint: "Think about the mind and behavior of offenders.",
            },
            {
              id: "q2",
              question: "Which is a social risk factor for criminal behavior?",
              options: [
                "Head injury",
                "Peer influence",
                "High IQ",
                "Healthy sleep"
              ],
              correctAnswer: 1,
              explanation: "Peer influence is a social factor that can increase risk.",
              hint: "It involves the people someone spends time with.",
            },
            {
              id: "q3",
              question: "Offender profiling should be used to:",
              options: [
                "Replace evidence",
                "Guide investigation with caution",
                "Guarantee identification",
                "Assign guilt immediately"
              ],
              correctAnswer: 1,
              explanation: "Profiling can guide investigations but should not replace evidence.",
              hint: "It’s a tool, not proof.",
            },
            {
              id: "q4",
              question: "Criminal behavior is usually influenced by:",
              options: [
                "Only biology",
                "Only free will",
                "Multiple biological, psychological, and social factors",
                "Only luck"
              ],
              correctAnswer: 2,
              explanation: "Crime is best understood through multiple interacting factors.",
              hint: "Think of a combination of factors rather than one cause.",
            },
            {
              id: "q5",
              question: "Situational factors refer to:",
              options: [
                "Long‑term personality traits only",
                "Immediate context and opportunity",
                "Genetic history",
                "Childhood intelligence"
              ],
              correctAnswer: 1,
              explanation: "Situational factors include the immediate environment and opportunity.",
              hint: "Think about what is happening in the moment.",
            },
          ],
        },
      ],
    },
    {
      id: "criminal-lesson-2",
      title: "Violence, Risk, and Prevention",
      components: [
        {
          id: "criminal-l2-v1",
          title: "Violence and Aggression - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9m2q6t1H4pE",
          content: "Understanding aggression, violence, and warning signs.",
        },
        {
          id: "criminal-l2-v2",
          title: "Violence and Aggression - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4t7m2q9K6wA",
          content: "Risk assessment and prevention strategies.",
        },
        {
          id: "criminal-l2-article",
          title: "Reducing Risk and Harm",
          duration: "9 min",
          type: "article",
          content: "How prevention and intervention reduce criminal harm.",
          articleContent: `
            <h2>Reducing Risk and Harm</h2>

            <p>Criminal psychology also focuses on prevention — identifying risk early and reducing harm through intervention.</p>

            <h3>Risk Assessment</h3>
            <p>Risk assessment combines structured tools with clinical judgment to evaluate likelihood of reoffending or harm.</p>

            <h3>Protective Factors</h3>
            <ul>
              <li><strong>Stable relationships</strong></li>
              <li><strong>Employment or education</strong></li>
              <li><strong>Access to mental health support</strong></li>
              <li><strong>Positive community ties</strong></li>
            </ul>

            <h3>Prevention Focus</h3>
            <p>Effective prevention targets both individual risk factors and community conditions that enable crime.</p>
          `,
        },
        {
          id: "criminal-l2-v3",
          title: "Prevention and Rehabilitation",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7p3m2q8V1yQ",
          content: "How rehabilitation and community programs reduce recidivism.",
        },
        {
          id: "criminal-l2-quiz",
          title: "Quiz: Risk and Prevention",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Risk assessment is used to:",
              options: [
                "Guarantee future behavior",
                "Estimate likelihood of harm or reoffending",
                "Replace clinical judgment",
                "Determine legal guilt"
              ],
              correctAnswer: 1,
              explanation: "Risk assessment estimates likelihood of harm or reoffending.",
              hint: "It’s about probability, not certainty.",
            },
            {
              id: "q2",
              question: "Which is a protective factor?",
              options: [
                "Social isolation",
                "Stable relationships",
                "Chronic substance misuse",
                "Unemployment"
              ],
              correctAnswer: 1,
              explanation: "Stable relationships reduce risk and support rehabilitation.",
              hint: "Think about factors that support stability.",
            },
            {
              id: "q3",
              question: "Prevention programs are most effective when they:",
              options: [
                "Focus only on punishment",
                "Ignore community conditions",
                "Address risk factors and provide supports",
                "Avoid early intervention"
              ],
              correctAnswer: 2,
              explanation: "Effective prevention addresses risk factors and provides support.",
              hint: "It’s both reducing risks and adding supports.",
            },
            {
              id: "q4",
              question: "Violence risk is typically:",
              options: [
                "Impossible to assess",
                "Fixed and unchangeable",
                "Influenced by dynamic factors",
                "Determined only by genetics"
              ],
              correctAnswer: 2,
              explanation: "Violence risk changes based on dynamic factors like stress or substance use.",
              hint: "Think about factors that can change over time.",
            },
            {
              id: "q5",
              question: "Rehabilitation aims to:",
              options: [
                "Increase recidivism",
                "Reduce reoffending through support and skill‑building",
                "Avoid treatment",
                "Focus only on detention"
              ],
              correctAnswer: 1,
              explanation: "Rehabilitation reduces reoffending by building skills and supports.",
              hint: "It’s about improving outcomes, not just punishment.",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "eyewitness-testimony",
  subjectId: "forensic-psychology",
  title: "Eyewitness Testimony",
  description: "How memory, bias, and procedures affect witness accuracy",
  level: "Beginner",
  lessons: [
    {
      id: "eyewitness-lesson-1",
      title: "Memory and Perception",
      components: [
        {
          id: "eye-l1-v1",
          title: "Eyewitness Testimony - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2m6p8q4T7yE",
          content: "How perception and attention shape eyewitness memory.",
        },
        {
          id: "eye-l1-v2",
          title: "Eyewitness Testimony - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5p1m7q2K9wA",
          content: "Memory reconstruction and the role of suggestion.",
        },
        {
          id: "eye-l1-article",
          title: "Why Eyewitness Memory Can Be Inaccurate",
          duration: "8 min",
          type: "article",
          content: "Understanding the limits of eyewitness recall.",
          articleContent: `
            <h2>Why Eyewitness Memory Can Be Inaccurate</h2>

            <p>Eyewitness testimony can be powerful, but human memory is not a perfect recording. Memory is reconstructive and can be influenced by stress, attention, and suggestion.</p>

            <h3>Common Sources of Error</h3>
            <ul>
              <li><strong>Stress:</strong> High arousal can narrow attention and reduce detail</li>
              <li><strong>Weapon Focus:</strong> Attention shifts to a threat, reducing other recall</li>
              <li><strong>Suggestion:</strong> Leading questions can alter memory</li>
              <li><strong>Confidence‑Accuracy Gap:</strong> Confidence doesn’t always mean accuracy</li>
            </ul>

            <h3>Reconstructive Memory</h3>
            <p>People rebuild memories from fragments and expectations. This makes recall vulnerable to distortion.</p>
          `,
        },
        {
          id: "eye-l1-v3",
          title: "Confidence vs. Accuracy",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7m2p9q1L5tQ",
          content: "Why confident eyewitnesses are not always accurate.",
        },
        {
          id: "eye-l1-quiz",
          title: "Quiz: Eyewitness Memory",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Eyewitness memory is best described as:",
              options: [
                "A perfect recording",
                "Reconstructive and vulnerable to distortion",
                "Unchangeable after the event",
                "Unaffected by stress"
              ],
              correctAnswer: 1,
              explanation: "Memory is reconstructive and can be influenced by many factors.",
              hint: "Think about memory as rebuilding, not recording.",
            },
            {
              id: "q2",
              question: "Weapon focus refers to:",
              options: [
                "Improved memory for all details",
                "Attention narrowed to a threat, reducing other details",
                "A method to improve recall",
                "A memory disorder"
              ],
              correctAnswer: 1,
              explanation: "Weapon focus narrows attention to the weapon and reduces recall of other details.",
              hint: "Think about attention being pulled toward danger.",
            },
            {
              id: "q3",
              question: "Leading questions can:",
              options: [
                "Improve accuracy",
                "Alter memory through suggestion",
                "Prevent bias",
                "Eliminate stress"
              ],
              correctAnswer: 1,
              explanation: "Leading questions can change how witnesses remember events.",
              hint: "It’s about suggestion influencing memory.",
            },
            {
              id: "q4",
              question: "The confidence‑accuracy gap means:",
              options: [
                "Confidence always equals accuracy",
                "Confidence does not always predict accuracy",
                "Accuracy is impossible",
                "Confident witnesses are always wrong"
              ],
              correctAnswer: 1,
              explanation: "Confidence is not a perfect indicator of accuracy.",
              hint: "High confidence doesn’t guarantee correctness.",
            },
            {
              id: "q5",
              question: "High stress tends to:",
              options: [
                "Increase recall for all details",
                "Narrow attention and reduce detail",
                "Eliminate memory errors",
                "Prevent suggestion effects"
              ],
              correctAnswer: 1,
              explanation: "High stress can narrow attention and reduce detail recall.",
              hint: "Think about tunnel vision under stress.",
            },
          ],
        },
      ],
    },
    {
      id: "eyewitness-lesson-2",
      title: "Lineups and Interviewing",
      components: [
        {
          id: "eye-l2-v1",
          title: "Lineups and Identification - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3m7p1q6V8rE",
          content: "How lineup structure affects identification accuracy.",
        },
        {
          id: "eye-l2-v2",
          title: "Lineups and Identification - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/8p2m6q1K4yQ",
          content: "Best practices for eyewitness interviewing.",
        },
        {
          id: "eye-l2-article",
          title: "Improving Eyewitness Procedures",
          duration: "9 min",
          type: "article",
          content: "Procedures that reduce bias and improve accuracy.",
          articleContent: `
            <h2>Improving Eyewitness Procedures</h2>

            <p>Procedural safeguards can reduce bias and improve the reliability of eyewitness evidence.</p>

            <h3>Lineup Best Practices</h3>
            <ul>
              <li><strong>Double‑blind administration:</strong> The administrator does not know the suspect</li>
              <li><strong>Fair fillers:</strong> Non‑suspects match the witness’s description</li>
              <li><strong>Clear instructions:</strong> The suspect may or may not be present</li>
            </ul>

            <h3>Interviewing Techniques</h3>
            <p>The cognitive interview encourages detailed recall without leading questions, improving accuracy and completeness.</p>
          `,
        },
        {
          id: "eye-l2-v3",
          title: "The Cognitive Interview",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1t8m4q2H9pA",
          content: "How cognitive interview techniques improve witness recall.",
        },
        {
          id: "eye-l2-quiz",
          title: "Quiz: Eyewitness Procedures",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "A double‑blind lineup means:",
              options: [
                "The witness is blindfolded",
                "The administrator does not know the suspect",
                "The lineup has only two people",
                "The suspect is always present"
              ],
              correctAnswer: 1,
              explanation: "Double‑blind means the administrator doesn’t know who the suspect is.",
              hint: "It prevents unintentional cues.",
            },
            {
              id: "q2",
              question: "Fair fillers are used to:",
              options: [
                "Make the suspect stand out",
                "Match the witness’s description",
                "Speed up the lineup",
                "Reduce accuracy"
              ],
              correctAnswer: 1,
              explanation: "Fillers should match the description so the suspect doesn’t stand out.",
              hint: "They’re there to make the lineup fair.",
            },
            {
              id: "q3",
              question: "The cognitive interview helps by:",
              options: [
                "Using leading questions",
                "Encouraging detailed, non‑leading recall",
                "Rushing the witness",
                "Avoiding memory retrieval"
              ],
              correctAnswer: 1,
              explanation: "It improves recall through open, non‑leading techniques.",
              hint: "It’s about careful, open‑ended memory retrieval.",
            },
            {
              id: "q4",
              question: "Which instruction helps reduce false identifications?",
              options: [
                "The suspect is definitely in the lineup",
                "The suspect may or may not be present",
                "Pick someone quickly",
                "Only choose the person who looks closest"
              ],
              correctAnswer: 1,
              explanation: "Stating the suspect may or may not be present reduces pressure to choose.",
              hint: "It removes the assumption that the suspect is there.",
            },
            {
              id: "q5",
              question: "Leading questions can:",
              options: [
                "Increase accuracy",
                "Alter memory recall",
                "Prevent bias",
                "Improve confidence only"
              ],
              correctAnswer: 1,
              explanation: "Leading questions can change how witnesses remember events.",
              hint: "They introduce suggestion into recall.",
            },
          ],
        },
      ],
    },
  ],
},

  // ============================================================
  // SOCIAL PSYCHOLOGY & INFLUENCE
  // ============================================================
  
  {
    id: "social-psychology",
    subjectId: "social-influence",
    title: "Social Psychology",
    description: "How people think about, influence, and relate to one another",
    level: "Beginner",
    lessons: [
      {
        id: "social-psych-lesson-1",
        title: "Introduction to Social Psychology",
        components: [
          {
            id: "social-psych-l1-v1",
            title: "What is Social Psychology? - Part 1",
            duration: "12 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Understanding social influences on behavior.",
          },
          {
            id: "social-psych-l1-v2",
            title: "What is Social Psychology? - Part 2",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Social perception and attribution.",
          },
          {
            id: "social-psych-l1-article",
            title: "The Power of Social Influence",
            duration: "11 min",
            type: "article",
            content: "How social contexts shape our thoughts and behaviors.",
            articleContent: `
              <h2>The Power of Social Influence</h2>
              
              <p>Social psychology examines how our thoughts, feelings, and behaviors are influenced by the actual, imagined, or implied presence of others.</p>
              
              <h3>Key Concepts</h3>
              
              <p><strong>Conformity:</strong> Changing behavior to match group norms.</p>
              
              <p><strong>Obedience:</strong> Following orders from authority figures.</p>
              
              <p><strong>Persuasion:</strong> Changing attitudes and beliefs through communication.</p>
              
              <p><strong>Group Dynamics:</strong> How groups affect individual behavior.</p>
              
              <h3>Classic Studies</h3>
              
              <p>Milgram's obedience study and Asch's conformity experiments revealed the surprising power of social situations to influence behavior.</p>
            `,
          },
          {
            id: "social-psych-l1-v3",
            title: "Attitudes and Persuasion",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "How attitudes form and change.",
          },
          {
            id: "social-psych-l1-quiz",
            title: "Quiz: Social Psychology Fundamentals",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Conformity refers to:",
                options: [
                  "Being unique",
                  "Matching behavior to group norms",
                  "Always disagreeing",
                  "Avoiding groups"
                ],
                correctAnswer: 1,
                explanation: "Conformity is adjusting one's behavior or thinking to match group standards or expectations.",
                hint: "People 'conform' to fit in with the group.",
              },
              {
                id: "q2",
                question: "Asch's famous experiment demonstrated:",
                options: [
                  "Memory processes",
                  "The power of conformity",
                  "Learning through rewards",
                  "Brain structures"
                ],
                correctAnswer: 1,
                explanation: "Asch's line judgment experiment showed how people conform to group opinions even when clearly incorrect.",
                hint: "Participants gave wrong answers about line lengths to match the group.",
              },
              {
                id: "q3",
                question: "Milgram's obedience study showed:",
                options: [
                  "People never follow orders",
                  "People often obey authority even when uncomfortable",
                  "Authority has no influence",
                  "People always resist pressure"
                ],
                correctAnswer: 1,
                explanation: "Milgram found that most people would obey authority figures even when asked to do things that made them uncomfortable.",
                hint: "This study involved participants delivering what they thought were electric shocks.",
              },
              {
                id: "q4",
                question: "Social psychology primarily studies:",
                options: [
                  "Individual personality only",
                  "How social situations influence behavior",
                  "Only large-scale cultural differences",
                  "Physical health"
                ],
                correctAnswer: 1,
                explanation: "Social psychology examines how social contexts and interactions influence thoughts, feelings, and behaviors.",
                hint: "This field is about 'social' influences on behavior.",
              },
              {
                id: "q5",
                question: "The fundamental attribution error involves:",
                options: [
                  "Correct judgments always",
                  "Overemphasizing personality and underestimating situations",
                  "Ignoring behavior",
                  "Perfect accuracy"
                ],
                correctAnswer: 1,
                explanation: "The fundamental attribution error is our tendency to overestimate personality factors and underestimate situational factors when explaining others' behavior.",
                hint: "We tend to blame people's character rather than their circumstances.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
  id: "conformity",
  subjectId: "social-influence",
  title: "Conformity",
  description: "How and why people adjust behavior to match a group",
  level: "Beginner",
  lessons: [
    {
      id: "conformity-lesson-1",
      title: "Foundations of Conformity",
      components: [
        {
          id: "conformity-l1-v1",
          title: "Conformity - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6n9m2q4T7aE",
          content: "What conformity is and why it happens.",
        },
        {
          id: "conformity-l1-v2",
          title: "Conformity - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2p7m4q1K6yQ",
          content: "Normative vs. informational social influence.",
        },
        {
          id: "conformity-l1-article",
          title: "Why People Conform",
          duration: "8 min",
          type: "article",
          content: "Core mechanisms behind conformity.",
          articleContent: `
            <h2>Why People Conform</h2>

            <p>Conformity is the tendency to adjust behavior, opinions, or attitudes to align with group norms. It can help groups function smoothly, but it can also lead to poor decisions.</p>

            <h3>Two Main Types</h3>
            <ul>
              <li><strong>Normative Influence:</strong> Conforming to be accepted or avoid rejection</li>
              <li><strong>Informational Influence:</strong> Conforming because others seem to have better information</li>
            </ul>

            <h3>When Conformity Increases</h3>
            <ul>
              <li>Group size and unanimity</li>
              <li>Ambiguous situations</li>
              <li>Strong group identity</li>
            </ul>
          `,
        },
        {
          id: "conformity-l1-v3",
          title: "Conformity in Real Life",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4m1p8q2H6tA",
          content: "How conformity shapes everyday choices and social behavior.",
        },
        {
          id: "conformity-l1-quiz",
          title: "Quiz: Conformity Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Conformity is best defined as:",
              options: [
                "Refusing to follow group norms",
                "Changing behavior to match a group",
                "Acting without social influence",
                "Always doing the opposite of others"
              ],
              correctAnswer: 1,
              explanation: "Conformity involves adjusting behavior or beliefs to align with a group.",
              hint: "Think about matching a group’s behavior.",
            },
            {
              id: "q2",
              question: "Normative influence occurs because people:",
              options: [
                "Want to be correct",
                "Fear social rejection",
                "Have better information",
                "Are naturally independent"
              ],
              correctAnswer: 1,
              explanation: "Normative influence comes from the desire to be accepted or avoid rejection.",
              hint: "It’s about fitting in.",
            },
            {
              id: "q3",
              question: "Informational influence happens when:",
              options: [
                "The situation is clear",
                "People believe others have better information",
                "People want to stand out",
                "There is no uncertainty"
              ],
              correctAnswer: 1,
              explanation: "People conform because they assume others know better.",
              hint: "Think about uncertainty and looking to others.",
            },
            {
              id: "q4",
              question: "Conformity is more likely when:",
              options: [
                "Group is unanimous",
                "Group size is one",
                "The task is obvious",
                "There is no pressure"
              ],
              correctAnswer: 0,
              explanation: "Unanimity increases conformity pressure.",
              hint: "Think about everyone agreeing in the group.",
            },
            {
              id: "q5",
              question: "A downside of conformity is:",
              options: [
                "Improved group cohesion",
                "Faster decisions",
                "Groupthink and poor judgment",
                "More individual creativity"
              ],
              correctAnswer: 2,
              explanation: "Conformity can lead to groupthink and reduce critical thinking.",
              hint: "Think about when conformity goes too far.",
            },
          ],
        },
      ],
    },
    {
      id: "conformity-lesson-2",
      title: "Conformity, Compliance, and Dissent",
      components: [
        {
          id: "conformity-l2-v1",
          title: "Conformity and Compliance - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9p2m6q1K4tE",
          content: "How social pressure shapes behavior and decisions.",
        },
        {
          id: "conformity-l2-v2",
          title: "Conformity and Compliance - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3m7p1q6V8rQ",
          content: "The role of dissent and independence in groups.",
        },
        {
          id: "conformity-l2-article",
          title: "Resisting Conformity",
          duration: "9 min",
          type: "article",
          content: "How dissent and critical thinking reduce conformity pressures.",
          articleContent: `
            <h2>Resisting Conformity</h2>

            <p>Conformity is powerful, but people can resist it by thinking critically and seeking diverse perspectives.</p>

            <h3>Ways to Reduce Conformity</h3>
            <ul>
              <li><strong>Encourage dissent:</strong> One independent voice can reduce pressure</li>
              <li><strong>Use anonymous input:</strong> Reduces fear of rejection</li>
              <li><strong>Clarify goals:</strong> Focus on accuracy, not agreement</li>
            </ul>

            <h3>Healthy Groups</h3>
            <p>Groups function best when members feel safe to challenge ideas without social penalty.</p>
          `,
        },
        {
          id: "conformity-l2-v3",
          title: "Dissent and Decision Quality",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1t8m4q2H9pA",
          content: "How constructive dissent improves group decisions.",
        },
        {
          id: "conformity-l2-quiz",
          title: "Quiz: Conformity and Dissent",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "One independent dissenter can:",
              options: [
                "Increase conformity pressure",
                "Reduce conformity pressure",
                "Eliminate group influence entirely",
                "Make decisions slower but less accurate"
              ],
              correctAnswer: 1,
              explanation: "A single dissenter can reduce pressure to conform.",
              hint: "Think about how dissent changes group dynamics.",
            },
            {
              id: "q2",
              question: "Anonymous feedback reduces conformity because it:",
              options: [
                "Removes social evaluation",
                "Increases group size",
                "Decreases accuracy",
                "Encourages punishment"
              ],
              correctAnswer: 0,
              explanation: "Anonymity reduces fear of social judgment.",
              hint: "It’s about reducing evaluation pressure.",
            },
            {
              id: "q3",
              question: "Groupthink is more likely when groups:",
              options: [
                "Encourage debate",
                "Prioritize harmony over accuracy",
                "Invite outside perspectives",
                "Use anonymous voting"
              ],
              correctAnswer: 1,
              explanation: "Groupthink occurs when harmony matters more than critical evaluation.",
              hint: "Think about avoiding conflict at all costs.",
            },
            {
              id: "q4",
              question: "Which strategy improves decision quality?",
              options: [
                "Discouraging disagreement",
                "Encouraging diverse viewpoints",
                "Avoiding feedback",
                "Making decisions quickly"
              ],
              correctAnswer: 1,
              explanation: "Diverse viewpoints reduce bias and improve decisions.",
              hint: "More perspectives usually help.",
            },
            {
              id: "q5",
              question: "Compliance differs from conformity because compliance involves:",
              options: [
                "Changing beliefs",
                "Publicly agreeing without private belief change",
                "No social influence",
                "Only internal motivation"
              ],
              correctAnswer: 1,
              explanation: "Compliance is outward agreement without internal change.",
              hint: "Think about public behavior vs. private belief.",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "persuasion",
  subjectId: "social-influence",
  title: "Persuasion",
  description: "How messages, messengers, and context change attitudes",
  level: "Beginner",
  lessons: [
    {
      id: "persuasion-lesson-1",
      title: "How Persuasion Works",
      components: [
        {
          id: "persuasion-l1-v1",
          title: "Persuasion - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5m2p9q1K6tY",
          content: "The basics of persuasion and attitude change.",
        },
        {
          id: "persuasion-l1-v2",
          title: "Persuasion - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1r8m3q6V2sU",
          content: "The role of source credibility and message framing.",
        },
        {
          id: "persuasion-l1-article",
          title: "Elements of Persuasion",
          duration: "8 min",
          type: "article",
          content: "Key components that make persuasion effective.",
          articleContent: `
            <h2>Elements of Persuasion</h2>

            <p>Persuasion is the process of changing attitudes or behavior through communication.</p>

            <h3>Three Core Elements</h3>
            <ul>
              <li><strong>Source:</strong> Credibility, expertise, and trustworthiness</li>
              <li><strong>Message:</strong> Clarity, evidence, and emotional tone</li>
              <li><strong>Audience:</strong> Motivation, prior beliefs, and attention</li>
            </ul>

            <h3>Elaboration Likelihood Model</h3>
            <p>People process messages through a central route (careful thinking) or a peripheral route (surface cues like attractiveness or slogans).</p>
          `,
        },
        {
          id: "persuasion-l1-v3",
          title: "Central vs. Peripheral Routes",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9q2m4t1H6pA",
          content: "How people process persuasive messages differently.",
        },
        {
          id: "persuasion-l1-quiz",
          title: "Quiz: Persuasion Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Persuasion is:",
              options: [
                "The process of changing attitudes through communication",
                "Only about manipulation",
                "Unrelated to messaging",
                "Always ineffective"
              ],
              correctAnswer: 0,
              explanation: "Persuasion is about changing attitudes or behavior through communication.",
              hint: "Think about messages that influence beliefs.",
            },
            {
              id: "q2",
              question: "Source credibility depends on:",
              options: [
                "Trustworthiness and expertise",
                "Only attractiveness",
                "Only confidence",
                "Only repetition"
              ],
              correctAnswer: 0,
              explanation: "Credibility comes from expertise and trustworthiness.",
              hint: "Think about why people trust a source.",
            },
            {
              id: "q3",
              question: "Central route processing involves:",
              options: [
                "Careful thinking about arguments",
                "Using only slogans",
                "Ignoring evidence",
                "Relying on attractiveness"
              ],
              correctAnswer: 0,
              explanation: "Central processing involves deep evaluation of arguments.",
              hint: "Think about careful reasoning.",
            },
            {
              id: "q4",
              question: "Peripheral cues include:",
              options: [
                "Evidence and logic",
                "Expert analysis",
                "Attractiveness and slogans",
                "Detailed data"
              ],
              correctAnswer: 2,
              explanation: "Peripheral cues are surface features like attractiveness or catchy slogans.",
              hint: "Think about cues that don’t require deep thought.",
            },
            {
              id: "q5",
              question: "A message is more persuasive when the audience:",
              options: [
                "Is unmotivated and distracted",
                "Is motivated and attentive",
                "Has no interest at all",
                "Refuses to listen"
              ],
              correctAnswer: 1,
              explanation: "Motivated, attentive audiences are more likely to process messages deeply.",
              hint: "Think about when people care about the topic.",
            },
          ],
        },
      ],
    },
    {
      id: "persuasion-lesson-2",
      title: "Persuasion in Real Life",
      components: [
        {
          id: "persuasion-l2-v1",
          title: "Persuasion in Media - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7m1p8q4N2vE",
          content: "How media and advertising shape attitudes.",
        },
        {
          id: "persuasion-l2-v2",
          title: "Persuasion in Media - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2n6p3m7K5wQ",
          content: "Persuasion techniques in everyday communication.",
        },
        {
          id: "persuasion-l2-article",
          title: "Recognizing Persuasion Techniques",
          duration: "9 min",
          type: "article",
          content: "Common persuasion tactics and how to evaluate them.",
          articleContent: `
            <h2>Recognizing Persuasion Techniques</h2>

            <p>Persuasive messages often use a blend of evidence and emotion. Understanding these techniques helps people make more informed decisions.</p>

            <h3>Common Techniques</h3>
            <ul>
              <li><strong>Reciprocity:</strong> People feel obliged to return favors</li>
              <li><strong>Social Proof:</strong> People follow the behavior of others</li>
              <li><strong>Scarcity:</strong> Limited availability increases desire</li>
              <li><strong>Framing:</strong> The way information is presented shapes perception</li>
            </ul>

            <h3>Critical Evaluation</h3>
            <p>Ask: What evidence is presented? What emotions are being targeted? Are there alternative explanations?</p>
          `,
        },
        {
          id: "persuasion-l2-v3",
          title: "Evaluating Persuasive Messages",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4p8m2q1T6yA",
          content: "How to think critically about persuasion in daily life.",
        },
        {
          id: "persuasion-l2-quiz",
          title: "Quiz: Persuasion in Practice",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Social proof works because people:",
              options: [
                "Ignore others’ behavior",
                "Assume others know the right choice",
                "Prefer solitude",
                "Avoid popularity"
              ],
              correctAnswer: 1,
              explanation: "People often follow others when unsure about what to do.",
              hint: "Think about copying the crowd.",
            },
            {
              id: "q2",
              question: "Scarcity increases persuasion by:",
              options: [
                "Reducing value",
                "Making items feel less desirable",
                "Increasing perceived value and urgency",
                "Eliminating emotion"
              ],
              correctAnswer: 2,
              explanation: "Scarcity makes things seem more valuable and urgent.",
              hint: "Limited availability raises desire.",
            },
            {
              id: "q3",
              question: "Framing effects mean that:",
              options: [
                "The same information can feel different depending on presentation",
                "Facts always speak for themselves",
                "Emotions never influence decisions",
                "Messages should be ignored"
              ],
              correctAnswer: 0,
              explanation: "Framing changes how people interpret the same information.",
              hint: "Think about positive vs. negative framing.",
            },
            {
              id: "q4",
              question: "Reciprocity refers to:",
              options: [
                "Returning favors",
                "Ignoring social obligations",
                "Avoiding gifts",
                "Rejecting all requests"
              ],
              correctAnswer: 0,
              explanation: "Reciprocity is the tendency to return favors or kindness.",
              hint: "Think about feeling obliged to give back.",
            },
            {
              id: "q5",
              question: "Critical evaluation of persuasion asks:",
              options: [
                "What emotions and evidence are being used?",
                "How quickly can I decide?",
                "Who is the most confident speaker?",
                "Is repetition enough?"
              ],
              correctAnswer: 0,
              explanation: "Critical evaluation focuses on evidence and emotional appeals.",
              hint: "Look at both facts and feelings.",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "authority-bias",
  subjectId: "social-influence",
  title: "Authority Bias",
  description: "Why people defer to authority and how it shapes decisions",
  level: "Beginner",
  lessons: [
    {
      id: "authority-lesson-1",
      title: "Understanding Authority Bias",
      components: [
        {
          id: "authority-l1-v1",
          title: "Authority Bias - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2w9m5q4H7rA",
          content: "What authority bias is and how it works.",
        },
        {
          id: "authority-l1-v2",
          title: "Authority Bias - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/8b1m4q2N6tE",
          content: "Why people obey authority and the role of social norms.",
        },
        {
          id: "authority-l1-article",
          title: "The Power of Authority",
          duration: "8 min",
          type: "article",
          content: "How authority shapes judgment and behavior.",
          articleContent: `
            <h2>The Power of Authority</h2>

            <p>Authority bias is the tendency to attribute greater accuracy or legitimacy to the opinions of authority figures, and to be more influenced by them.</p>

            <h3>Why It Happens</h3>
            <ul>
              <li><strong>Socialization:</strong> People are taught to respect authority</li>
              <li><strong>Expertise:</strong> Authorities are assumed to know more</li>
              <li><strong>Power Dynamics:</strong> People want to avoid conflict with those in control</li>
            </ul>

            <h3>Benefits and Risks</h3>
            <p>Authority can help coordination and efficiency, but it can also lead to poor decisions if people stop thinking critically.</p>
          `,
        },
        {
          id: "authority-l1-v3",
          title: "Authority and Obedience",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3m7p1q6V8rQ",
          content: "How authority shapes obedience and compliance.",
        },
        {
          id: "authority-l1-quiz",
          title: "Quiz: Authority Bias Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Authority bias is:",
              options: [
                "Disregarding all authority",
                "Overvaluing the opinions of authority figures",
                "A medical disorder",
                "Always harmful"
              ],
              correctAnswer: 1,
              explanation: "Authority bias is the tendency to overvalue authority opinions.",
              hint: "Think about giving extra weight to authority figures.",
            },
            {
              id: "q2",
              question: "One reason authority bias occurs is:",
              options: [
                "People distrust expertise",
                "Socialization to respect authority",
                "Desire to challenge authority",
                "Avoiding group norms"
              ],
              correctAnswer: 1,
              explanation: "People are often socialized to respect and obey authority.",
              hint: "Think about what we learn in families and schools.",
            },
            {
              id: "q3",
              question: "A risk of authority bias is:",
              options: [
                "Better critical thinking",
                "Less conformity",
                "Reduced independent judgment",
                "More debate"
              ],
              correctAnswer: 2,
              explanation: "Authority bias can reduce independent judgment.",
              hint: "Think about people deferring without questioning.",
            },
            {
              id: "q4",
              question: "Authority can be helpful because it:",
              options: [
                "Eliminates all mistakes",
                "Improves coordination and decision speed",
                "Prevents learning",
                "Always overrides evidence"
              ],
              correctAnswer: 1,
              explanation: "Authority can help groups coordinate and act efficiently.",
              hint: "Think about clear leadership improving efficiency.",
            },
            {
              id: "q5",
              question: "A way to reduce authority bias is to:",
              options: [
                "Avoid all experts",
                "Encourage questioning and evidence‑based decisions",
                "Follow orders without thinking",
                "Remove feedback"
              ],
              correctAnswer: 1,
              explanation: "Questioning and focusing on evidence reduces authority bias.",
              hint: "Think about critical thinking.",
            },
          ],
        },
      ],
    },
    {
      id: "authority-lesson-2",
      title: "Authority in Real‑World Decisions",
      components: [
        {
          id: "authority-l2-v1",
          title: "Authority in Organizations - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6t2x0p8Q5mE",
          content: "How authority shapes workplace decisions and culture.",
        },
        {
          id: "authority-l2-v2",
          title: "Authority in Organizations - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1p7k4m2W9aQ",
          content: "When obedience helps and when it harms.",
        },
        {
          id: "authority-l2-article",
          title: "Balancing Authority and Critical Thinking",
          duration: "9 min",
          type: "article",
          content: "Ways to work effectively with authority without losing judgment.",
          articleContent: `
            <h2>Balancing Authority and Critical Thinking</h2>

            <p>Respecting authority is useful for coordination, but critical thinking ensures decisions are sound.</p>

            <h3>Healthy Authority</h3>
            <ul>
              <li><strong>Transparent reasoning:</strong> Leaders explain decisions</li>
              <li><strong>Feedback loops:</strong> People can raise concerns safely</li>
              <li><strong>Evidence focus:</strong> Decisions are grounded in data</li>
            </ul>

            <h3>Warning Signs</h3>
            <p>Blind obedience, fear of speaking up, and lack of accountability increase the risk of poor outcomes.</p>
          `,
        },
        {
          id: "authority-l2-v3",
          title: "Speaking Up to Authority",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4k2p7m9L1oA",
          content: "Strategies for constructive dissent and safety in hierarchies.",
        },
        {
          id: "authority-l2-quiz",
          title: "Quiz: Authority in Practice",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Healthy authority includes:",
              options: [
                "Transparent reasoning and feedback",
                "No explanations",
                "Punishing questions",
                "Avoiding evidence"
              ],
              correctAnswer: 0,
              explanation: "Healthy authority explains decisions and welcomes feedback.",
              hint: "Think about transparency and openness.",
            },
            {
              id: "q2",
              question: "A warning sign of unhealthy authority is:",
              options: [
                "People feel safe to speak up",
                "Leaders invite questions",
                "Fear of speaking up",
                "Evidence‑based decisions"
              ],
              correctAnswer: 2,
              explanation: "Fear of speaking up indicates unhealthy authority dynamics.",
              hint: "Think about silence and fear in hierarchies.",
            },
            {
              id: "q3",
              question: "Authority bias can be reduced by:",
              options: [
                "Critical thinking and evidence",
                "Blind obedience",
                "Ignoring data",
                "Avoiding feedback"
              ],
              correctAnswer: 0,
              explanation: "Critical thinking and evidence help counter authority bias.",
              hint: "Focus on facts, not just status.",
            },
            {
              id: "q4",
              question: "Constructive dissent means:",
              options: [
                "Disagreeing without evidence",
                "Raising concerns respectfully and with reasons",
                "Refusing to participate",
                "Only agreeing"
              ],
              correctAnswer: 1,
              explanation: "Constructive dissent is respectful disagreement with reasoning.",
              hint: "Think about respectful, evidence‑based challenge.",
            },
            {
              id: "q5",
              question: "Feedback loops help by:",
              options: [
                "Reducing accountability",
                "Allowing concerns to surface early",
                "Preventing questions",
                "Increasing conformity"
              ],
              correctAnswer: 1,
              explanation: "Feedback loops allow concerns and errors to surface early.",
              hint: "They help catch problems before they grow.",
            },
          ],
        },
      ],
    },
  ],
},

  // ============================================================
  // NEUROSCIENCE & BRAIN RESEARCH
  // ============================================================
  
  {
    id: "neuroscience-intro",
    subjectId: "neuroscience",
    title: "Neuroscience",
    description: "Understanding the brain and nervous system",
    level: "Beginner",
    lessons: [
      {
        id: "neuro-lesson-1",
        title: "Introduction to Neuroscience",
        components: [
          {
            id: "neuro-l1-v1",
            title: "The Brain and Nervous System - Part 1",
            duration: "14 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/9mPwQTiMSj8",
            content: "Overview of brain structure and function.",
          },
          {
            id: "neuro-l1-v2",
            title: "The Brain and Nervous System - Part 2",
            duration: "15 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/z-IR48Mb3W0",
            content: "Neurons and neural communication.",
          },
          {
            id: "neuro-l1-article",
            title: "Understanding the Brain",
            duration: "12 min",
            type: "article",
            content: "How the brain creates mind and behavior.",
            articleContent: `
              <h2>Understanding the Brain</h2>
              
              <p>Neuroscience studies the brain and nervous system, exploring how neural activity creates thoughts, emotions, and behaviors.</p>
              
              <h3>Brain Structure</h3>
              
              <p><strong>Cerebral Cortex:</strong> Higher-level thinking and processing.</p>
              
              <p><strong>Limbic System:</strong> Emotion and memory.</p>
              
              <p><strong>Brain Stem:</strong> Basic life functions.</p>
              
              <p><strong>Cerebellum:</strong> Coordination and balance.</p>
              
              <h3>Neurons and Neurotransmitters</h3>
              
              <p>Neurons communicate through electrical and chemical signals. Neurotransmitters like dopamine, serotonin, and norepinephrine influence mood, motivation, and behavior.</p>
              
              <h3>Career Paths</h3>
              
              <p>Neuroscientists work in research, medicine, biotech, and pharmaceuticals, earning $80,000-$200,000+.</p>
            `,
          },
          {
            id: "neuro-l1-v3",
            title: "Brain Imaging Techniques",
            duration: "13 min",
            type: "video",
            videoUrl: "https://www.youtube.com/embed/LO1mTELoj6o",
            content: "Methods for studying the living brain.",
          },
          {
            id: "neuro-l1-quiz",
            title: "Quiz: Neuroscience Basics",
            duration: "10 min",
            type: "practice",
            questions: [
              {
                id: "q1",
                question: "Which brain structure is primarily involved in emotion and memory?",
                options: [
                  "Cerebral cortex",
                  "Limbic system",
                  "Brain stem",
                  "Spinal cord"
                ],
                correctAnswer: 1,
                explanation: "The limbic system, including structures like the amygdala and hippocampus, plays key roles in emotion and memory.",
                hint: "This system is deep in the brain and handles emotional processing.",
              },
              {
                id: "q2",
                question: "Neurons communicate primarily through:",
                options: [
                  "Blood flow",
                  "Electrical and chemical signals",
                  "Light waves",
                  "Sound waves"
                ],
                correctAnswer: 1,
                explanation: "Neurons communicate through electrical signals within the cell and chemical signals (neurotransmitters) between cells.",
                hint: "Think about what creates brain activity - electrical and chemical processes.",
              },
              {
                id: "q3",
                question: "Which neurotransmitter is associated with reward and motivation?",
                options: [
                  "GABA",
                  "Dopamine",
                  "Glutamate",
                  "Acetylcholine"
                ],
                correctAnswer: 1,
                explanation: "Dopamine plays a crucial role in reward, motivation, and pleasure experiences.",
                hint: "This neurotransmitter is involved in the brain's reward system.",
              },
              {
                id: "q4",
                question: "fMRI brain imaging measures:",
                options: [
                  "Electrical activity",
                  "Blood flow and oxygen levels",
                  "Chemical composition",
                  "Temperature"
                ],
                correctAnswer: 1,
                explanation: "Functional MRI (fMRI) measures brain activity by detecting changes in blood flow and oxygen levels.",
                hint: "MRI uses magnetic fields to measure blood flow in the brain.",
              },
              {
                id: "q5",
                question: "The cerebral cortex is responsible for:",
                options: [
                  "Only breathing",
                  "Higher-level thinking and processing",
                  "Only heart rate",
                  "Only reflexes"
                ],
                correctAnswer: 1,
                explanation: "The cerebral cortex handles higher-level functions like thinking, planning, language, and conscious awareness.",
                hint: "This is the outer layer where complex thinking happens.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
  id: "neuroplasticity",
  subjectId: "neuroscience",
  title: "Neuroplasticity",
  description: "How the brain changes with learning, experience, and recovery",
  level: "Beginner",
  lessons: [
    {
      id: "neuroplasticity-lesson-1",
      title: "Foundations of Neuroplasticity",
      components: [
        {
          id: "np-l1-v1",
          title: "Neuroplasticity - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3k2m7p9L4vA",
          content: "What neuroplasticity is and why it matters.",
        },
        {
          id: "np-l1-v2",
          title: "Neuroplasticity - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6t1m4q8K2nQ",
          content: "Synaptic plasticity, pruning, and critical periods.",
        },
        {
          id: "np-l1-article",
          title: "How the Brain Changes",
          duration: "8 min",
          type: "article",
          content: "Key mechanisms behind brain change and learning.",
          articleContent: `
            <h2>How the Brain Changes</h2>

            <p>Neuroplasticity is the brain’s ability to change its structure and function in response to experience. This includes learning new skills, adapting to injury, and forming new habits.</p>

            <h3>Core Mechanisms</h3>
            <ul>
              <li><strong>Synaptic Plasticity:</strong> Strengthening or weakening of connections between neurons</li>
              <li><strong>Neural Pruning:</strong> Removing weaker connections to improve efficiency</li>
              <li><strong>Myelination:</strong> Improving the speed of neural signals with practice</li>
            </ul>

            <h3>Why It Matters</h3>
            <p>Plasticity explains how we learn, how therapy works, and why practice changes performance over time.</p>
          `,
        },
        {
          id: "np-l1-v3",
          title: "Plasticity in Daily Life",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2p6m8q1T5yE",
          content: "Real‑world examples of neuroplasticity in skill building and recovery.",
        },
        {
          id: "np-l1-quiz",
          title: "Quiz: Neuroplasticity Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Neuroplasticity refers to:",
              options: [
                "A fixed, unchanging brain",
                "The brain’s ability to change with experience",
                "Only genetic brain changes",
                "Only childhood brain development"
              ],
              correctAnswer: 1,
              explanation: "Neuroplasticity is the brain’s ability to change and adapt.",
              hint: "Think about learning and adaptation.",
            },
            {
              id: "q2",
              question: "Synaptic plasticity involves:",
              options: [
                "New bones forming",
                "Changes in strength of neural connections",
                "Only hormone changes",
                "Only sleep cycles"
              ],
              correctAnswer: 1,
              explanation: "Synaptic plasticity is about strengthening or weakening connections.",
              hint: "Focus on connections between neurons.",
            },
            {
              id: "q3",
              question: "Neural pruning is:",
              options: [
                "Creating extra connections",
                "Removing weaker connections",
                "Only memory loss",
                "A type of brain damage"
              ],
              correctAnswer: 1,
              explanation: "Pruning removes weaker connections to improve efficiency.",
              hint: "Think about trimming unused pathways.",
            },
            {
              id: "q4",
              question: "Myelination helps by:",
              options: [
                "Slowing neural signals",
                "Speeding up neural communication",
                "Removing neurons",
                "Preventing learning"
              ],
              correctAnswer: 1,
              explanation: "Myelination speeds up neural signal transmission.",
              hint: "It improves signal speed.",
            },
            {
              id: "q5",
              question: "Neuroplasticity is important because it:",
              options: [
                "Explains how learning changes the brain",
                "Means the brain never changes",
                "Only applies to infants",
                "Prevents recovery"
              ],
              correctAnswer: 0,
              explanation: "Plasticity explains how learning and experience change the brain.",
              hint: "Think about how practice leads to change.",
            },
          ],
        },
      ],
    },
    {
      id: "neuroplasticity-lesson-2",
      title: "Plasticity, Habits, and Recovery",
      components: [
        {
          id: "np-l2-v1",
          title: "Plasticity and Habits - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9m2q6t1H4pE",
          content: "How repeated behaviors shape neural pathways.",
        },
        {
          id: "np-l2-v2",
          title: "Plasticity and Habits - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4t7m2q9K6wA",
          content: "Rewiring habits and the role of practice and feedback.",
        },
        {
          id: "np-l2-article",
          title: "Rewiring the Brain",
          duration: "9 min",
          type: "article",
          content: "How practice, feedback, and recovery reshape brain networks.",
          articleContent: `
            <h2>Rewiring the Brain</h2>

            <p>Plasticity explains how habits form and how recovery happens after injury. Repeated practice strengthens specific neural circuits.</p>

            <h3>Habits and Repetition</h3>
            <p>Behavior repeated over time strengthens the pathways that support it, making the behavior easier and more automatic.</p>

            <h3>Recovery and Compensation</h3>
            <p>After injury, the brain can reassign functions to new regions. Therapy and practice guide this process.</p>

            <h3>Key Ingredients</h3>
            <ul>
              <li><strong>Repetition:</strong> Practice strengthens circuits</li>
              <li><strong>Feedback:</strong> Guides correction and improvement</li>
              <li><strong>Challenge:</strong> Slight difficulty promotes growth</li>
            </ul>
          `,
        },
        {
          id: "np-l2-v3",
          title: "Neuroplasticity in Rehabilitation",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7p3m2q8V1yQ",
          content: "How therapy uses plasticity to support recovery.",
        },
        {
          id: "np-l2-quiz",
          title: "Quiz: Plasticity and Habits",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Habits form because:",
              options: [
                "Repetition strengthens neural pathways",
                "The brain stops changing",
                "Only motivation matters",
                "Memory is fixed"
              ],
              correctAnswer: 0,
              explanation: "Repetition strengthens the circuits behind habits.",
              hint: "Think about practice and repetition.",
            },
            {
              id: "q2",
              question: "Recovery after brain injury can involve:",
              options: [
                "No change in brain function",
                "New brain regions taking over functions",
                "Only medication",
                "Only genetics"
              ],
              correctAnswer: 1,
              explanation: "Plasticity allows other regions to compensate and take over.",
              hint: "The brain can reassign tasks.",
            },
            {
              id: "q3",
              question: "Feedback is important because it:",
              options: [
                "Prevents learning",
                "Guides correction and improvement",
                "Makes practice irrelevant",
                "Stops plasticity"
              ],
              correctAnswer: 1,
              explanation: "Feedback helps adjust behavior and strengthen learning.",
              hint: "Think about correcting errors.",
            },
            {
              id: "q4",
              question: "A key ingredient for plastic change is:",
              options: [
                "No effort",
                "Repetition",
                "Avoiding challenge",
                "Randomness"
              ],
              correctAnswer: 1,
              explanation: "Repetition is essential for strengthening pathways.",
              hint: "Practice makes pathways stronger.",
            },
            {
              id: "q5",
              question: "Plasticity suggests the brain is:",
              options: [
                "Fixed after childhood",
                "Capable of change throughout life",
                "Only shaped by genetics",
                "Unable to adapt"
              ],
              correctAnswer: 1,
              explanation: "Plasticity means the brain can change across the lifespan.",
              hint: "Think about lifelong learning.",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "dopamine",
  subjectId: "neuroscience",
  title: "Dopamine",
  description: "Understanding dopamine’s role in motivation, reward, and learning",
  level: "Beginner",
  lessons: [
    {
      id: "dopamine-lesson-1",
      title: "Dopamine and Reward",
      components: [
        {
          id: "dopamine-l1-v1",
          title: "Dopamine - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2m6p8q4T7yE",
          content: "What dopamine is and how it functions in the brain.",
        },
        {
          id: "dopamine-l1-v2",
          title: "Dopamine - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/5p1m7q2K9wA",
          content: "Dopamine and reward prediction, motivation, and reinforcement.",
        },
        {
          id: "dopamine-l1-article",
          title: "The Dopamine System",
          duration: "8 min",
          type: "article",
          content: "How dopamine shapes motivation and learning.",
          articleContent: `
            <h2>The Dopamine System</h2>

            <p>Dopamine is a neurotransmitter that helps regulate motivation, reward, and learning. It signals when outcomes are better or worse than expected.</p>

            <h3>Reward Prediction Error</h3>
            <p>When something is better than expected, dopamine spikes. When it’s worse, dopamine dips. This guides learning and future behavior.</p>

            <h3>Motivation and Effort</h3>
            <p>Dopamine helps energize goal‑directed behavior, making effort feel worthwhile when rewards are expected.</p>

            <h3>Common Misconceptions</h3>
            <p>Dopamine is not simply a “pleasure chemical.” It is more about learning and motivation than pure enjoyment.</p>
          `,
        },
        {
          id: "dopamine-l1-v3",
          title: "Motivation and Reward",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/7m2p9q1L5tQ",
          content: "How dopamine drives effort and reinforces learning.",
        },
        {
          id: "dopamine-l1-quiz",
          title: "Quiz: Dopamine Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Dopamine is a:",
              options: [
                "Hormone only",
                "Neurotransmitter involved in motivation and learning",
                "Type of muscle fiber",
                "Brain structure"
              ],
              correctAnswer: 1,
              explanation: "Dopamine is a neurotransmitter tied to motivation and learning.",
              hint: "It’s a chemical messenger in the brain.",
            },
            {
              id: "q2",
              question: "Reward prediction error means:",
              options: [
                "Rewards are always expected",
                "Dopamine signals when outcomes differ from expectations",
                "Rewards have no effect on learning",
                "Only punishment affects learning"
              ],
              correctAnswer: 1,
              explanation: "Dopamine signals when outcomes are better or worse than expected.",
              hint: "Think about surprise in learning.",
            },
            {
              id: "q3",
              question: "Dopamine is best understood as:",
              options: [
                "Only a pleasure chemical",
                "A signal for learning and motivation",
                "A sleep hormone",
                "A memory storage system"
              ],
              correctAnswer: 1,
              explanation: "Dopamine supports learning and motivation, not just pleasure.",
              hint: "It’s about wanting and learning.",
            },
            {
              id: "q4",
              question: "A dopamine spike often happens when:",
              options: [
                "Something is worse than expected",
                "Nothing changes",
                "Something is better than expected",
                "There is no reward"
              ],
              correctAnswer: 2,
              explanation: "Dopamine spikes when outcomes exceed expectations.",
              hint: "Think about positive surprise.",
            },
            {
              id: "q5",
              question: "Dopamine supports motivation by:",
              options: [
                "Reducing effort",
                "Energizing goal‑directed behavior",
                "Stopping learning",
                "Eliminating curiosity"
              ],
              correctAnswer: 1,
              explanation: "Dopamine helps energize goal‑directed behavior.",
              hint: "It helps you pursue goals.",
            },
          ],
        },
      ],
    },
    {
      id: "dopamine-lesson-2",
      title: "Dopamine in Everyday Life",
      components: [
        {
          id: "dopamine-l2-v1",
          title: "Dopamine and Habits - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3m7p1q6V8rE",
          content: "How dopamine reinforces habits and routines.",
        },
        {
          id: "dopamine-l2-v2",
          title: "Dopamine and Habits - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/8p2m6q1K4yQ",
          content: "Dopamine, cues, and reward cycles.",
        },
        {
          id: "dopamine-l2-article",
          title: "Dopamine and Behavior",
          duration: "9 min",
          type: "article",
          content: "How dopamine influences habits and decision patterns.",
          articleContent: `
            <h2>Dopamine and Behavior</h2>

            <p>Dopamine helps tag certain behaviors as valuable, making them more likely to be repeated.</p>

            <h3>Habits and Cues</h3>
            <p>Environmental cues can trigger dopamine responses, pushing people toward learned routines.</p>

            <h3>Balancing Reward</h3>
            <p>Healthy habits often come from aligning rewards with long‑term goals rather than short‑term impulses.</p>
          `,
        },
        {
          id: "dopamine-l2-v3",
          title: "Shaping Motivation",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1t8m4q2H9pA",
          content: "Applying dopamine science to build better habits.",
        },
        {
          id: "dopamine-l2-quiz",
          title: "Quiz: Dopamine in Practice",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Dopamine helps habits form because it:",
              options: [
                "Weakens learned behaviors",
                "Reinforces actions linked to rewards",
                "Stops learning",
                "Eliminates cues"
              ],
              correctAnswer: 1,
              explanation: "Dopamine reinforces behaviors that lead to rewards.",
              hint: "Think about strengthening behaviors.",
            },
            {
              id: "q2",
              question: "Cues influence dopamine by:",
              options: [
                "Preventing reward signals",
                "Triggering expectation of reward",
                "Eliminating motivation",
                "Blocking memory"
              ],
              correctAnswer: 1,
              explanation: "Cues can trigger dopamine responses tied to expected rewards.",
              hint: "They signal that a reward might be coming.",
            },
            {
              id: "q3",
              question: "A healthy reward system tends to:",
              options: [
                "Favor only short‑term impulses",
                "Align short‑term rewards with long‑term goals",
                "Avoid all rewards",
                "Eliminate motivation"
              ],
              correctAnswer: 1,
              explanation: "Healthy systems align rewards with long‑term goals.",
              hint: "Think about sustainable motivation.",
            },
            {
              id: "q4",
              question: "Dopamine dips occur when:",
              options: [
                "Outcomes are worse than expected",
                "Everything is perfect",
                "There is no learning",
                "Rewards are larger than expected"
              ],
              correctAnswer: 0,
              explanation: "Dopamine dips when outcomes are worse than expected.",
              hint: "Think about negative surprise.",
            },
            {
              id: "q5",
              question: "Dopamine is most tied to:",
              options: [
                "Only pleasure",
                "Learning and motivation",
                "Muscle growth",
                "Sleep cycles"
              ],
              correctAnswer: 1,
              explanation: "Dopamine is tied to learning and motivation, not just pleasure.",
              hint: "It’s about wanting and learning.",
            },
          ],
        },
      ],
    },
  ],
},

  {
  id: "decision-making",
  subjectId: "neuroscience",
  title: "Decision Making",
  description: "How the brain evaluates choices, risks, and rewards",
  level: "Beginner",
  lessons: [
    {
      id: "decision-lesson-1",
      title: "The Neuroscience of Choice",
      components: [
        {
          id: "decision-l1-v1",
          title: "Decision Making - Part 1",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/6n9m2q4T7aE",
          content: "How the brain evaluates options and outcomes.",
        },
        {
          id: "decision-l1-v2",
          title: "Decision Making - Part 2",
          duration: "11 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/2p7m4q1K6yQ",
          content: "Risk, reward, and the role of emotion in choices.",
        },
        {
          id: "decision-l1-article",
          title: "How the Brain Chooses",
          duration: "8 min",
          type: "article",
          content: "Key brain systems involved in decision making.",
          articleContent: `
            <h2>How the Brain Chooses</h2>

            <p>Decision making involves multiple brain systems that evaluate rewards, risks, and long‑term consequences.</p>

            <h3>Key Systems</h3>
            <ul>
              <li><strong>Prefrontal Cortex:</strong> Planning, self‑control, and long‑term goals</li>
              <li><strong>Striatum:</strong> Reward learning and habit formation</li>
              <li><strong>Amygdala:</strong> Emotional salience and threat detection</li>
            </ul>

            <h3>Emotion and Choice</h3>
            <p>Emotions can bias decisions, sometimes helping by signaling danger and sometimes hurting by amplifying fear or impulsivity.</p>
          `,
        },
        {
          id: "decision-l1-v3",
          title: "Risk and Reward",
          duration: "13 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/4m1p8q2H6tA",
          content: "How the brain weighs risk and reward during decisions.",
        },
        {
          id: "decision-l1-quiz",
          title: "Quiz: Decision Making Basics",
          duration: "10 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "The prefrontal cortex is most associated with:",
              options: [
                "Long‑term planning and self‑control",
                "Muscle movement only",
                "Sleep cycles",
                "Basic reflexes"
              ],
              correctAnswer: 0,
              explanation: "The prefrontal cortex supports planning and self‑control.",
              hint: "Think about executive functions.",
            },
            {
              id: "q2",
              question: "The amygdala is involved in:",
              options: [
                "Emotional salience and threat detection",
                "Only memory storage",
                "Language processing",
                "Vision processing"
              ],
              correctAnswer: 0,
              explanation: "The amygdala helps detect and respond to threats and emotions.",
              hint: "Think about fear and emotional signals.",
            },
            {
              id: "q3",
              question: "The striatum is linked to:",
              options: [
                "Reward learning and habits",
                "Only balance",
                "Sleep regulation",
                "Speech production"
              ],
              correctAnswer: 0,
              explanation: "The striatum is central to reward learning and habit formation.",
              hint: "Think about reward and repetition.",
            },
            {
              id: "q4",
              question: "Emotions can:",
              options: [
                "Never affect decisions",
                "Always improve decisions",
                "Bias decisions in helpful or harmful ways",
                "Only harm decisions"
              ],
              correctAnswer: 2,
              explanation: "Emotions can guide decisions but also introduce bias.",
              hint: "They can help or hurt depending on context.",
            },
            {
              id: "q5",
              question: "Decision making involves:",
              options: [
                "One brain area only",
                "Multiple systems working together",
                "No emotions at all",
                "Only habit responses"
              ],
              correctAnswer: 1,
              explanation: "Decision making uses multiple interacting brain systems.",
              hint: "Think about networks, not a single spot.",
            },
          ],
        },
      ],
    },
    {
      id: "decision-lesson-2",
      title: "Biases and Self‑Control",
      components: [
        {
          id: "decision-l2-v1",
          title: "Biases and Heuristics - Part 1",
          duration: "14 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/9p2m6q1K4tE",
          content: "How mental shortcuts influence choices.",
        },
        {
          id: "decision-l2-v2",
          title: "Biases and Heuristics - Part 2",
          duration: "12 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/3m7p1q6V8rQ",
          content: "Impulsivity, delay discounting, and self‑control.",
        },
        {
          id: "decision-l2-article",
          title: "Improving Decisions",
          duration: "9 min",
          type: "article",
          content: "How to reduce bias and strengthen self‑control.",
          articleContent: `
            <h2>Improving Decisions</h2>

            <p>People often rely on heuristics — mental shortcuts that save time but can introduce bias.</p>

            <h3>Common Biases</h3>
            <ul>
              <li><strong>Availability:</strong> Overweighting information that is easy to recall</li>
              <li><strong>Confirmation:</strong> Seeking evidence that fits existing beliefs</li>
              <li><strong>Loss Aversion:</strong> Losses feel larger than gains</li>
            </ul>

            <h3>Self‑Control Strategies</h3>
            <p>Planning, delaying decisions, and changing the environment can reduce impulsive choices.</p>
          `,
        },
        {
          id: "decision-l2-v3",
          title: "Self‑Control Under Pressure",
          duration: "15 min",
          type: "video",
          videoUrl: "https://www.youtube.com/embed/1t8m4q2H9pA",
          content: "How to manage impulsivity and strengthen decision quality.",
        },
        {
          id: "decision-l2-quiz",
          title: "Quiz: Biases and Self‑Control",
          duration: "12 min",
          type: "practice",
          questions: [
            {
              id: "q1",
              question: "Availability bias is:",
              options: [
                "Overweighting easily recalled information",
                "Always choosing the safest option",
                "Ignoring emotions",
                "Preferring long‑term rewards"
              ],
              correctAnswer: 0,
              explanation: "Availability bias means judging based on what is easiest to recall.",
              hint: "Think about memory and what comes to mind quickly.",
            },
            {
              id: "q2",
              question: "Confirmation bias involves:",
              options: [
                "Seeking disconfirming evidence",
                "Seeking evidence that supports existing beliefs",
                "Avoiding all information",
                "Random decision making"
              ],
              correctAnswer: 1,
              explanation: "Confirmation bias is the tendency to seek information that fits existing beliefs.",
              hint: "Think about looking for agreement.",
            },
            {
              id: "q3",
              question: "Loss aversion means:",
              options: [
                "Gains feel stronger than losses",
                "Losses feel stronger than gains",
                "Losses and gains feel equal",
                "People ignore losses"
              ],
              correctAnswer: 1,
              explanation: "Losses tend to feel more painful than equivalent gains.",
              hint: "Think about how losses feel heavier.",
            },
            {
              id: "q4",
              question: "A way to reduce impulsive decisions is to:",
              options: [
                "Make choices immediately",
                "Delay the decision",
                "Avoid planning",
                "Ignore consequences"
              ],
              correctAnswer: 1,
              explanation: "Delaying decisions can reduce impulsivity.",
              hint: "Time can reduce impulse.",
            },
            {
              id: "q5",
              question: "Heuristics are:",
              options: [
                "Always wrong",
                "Mental shortcuts that can introduce bias",
                "Long‑term plans",
                "Emotional disorders"
              ],
              correctAnswer: 1,
              explanation: "Heuristics are shortcuts that save time but can create bias.",
              hint: "They’re quick rules of thumb.",
            },
          ],
        },
      ],
    },
  ],
},
];
