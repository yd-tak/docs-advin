---
sidebar_position: 3
---

# Interview Sequence Setup

Advin allows you to create a structured AI interview process for each job vacancy. You can define multiple interview sequences to evaluate technical knowledge, problem-solving, soft skills, and other essential criteria.

---

## 🏆 **1. What is an Interview Sequence?**
An **Interview Sequence** is a structured set of questions and evaluation criteria designed to measure different aspects of a candidate's suitability for a job.

Each interview sequence can assess:  
✅ Technical knowledge  
✅ Work experience  
✅ Personality and cultural fit  
✅ Decision-making and leadership  

Advin allows you to define up to **5 interview sequences** per job vacancy.  

✅ **Goal:** Create a structured, automated evaluation process.  

---

## 📝 **2. Types of Interview Sequences**
You can define different types of sequences depending on the skills and behaviors you want to evaluate.

### 🔹 **(1) Work Experience**
Tests the candidate’s past projects and work history.  
- Focus on job relevance, career progression, and responsibilities.  

👉 **Example Questions:**  
- "Describe the most challenging project you have worked on."  
- "What’s the biggest mistake you've made at work and how did you handle it?"  

✅ **Best For:** Senior roles, project-based roles.  

---

### 🔹 **(2) Technical Questions**
Tests specific technical skills and knowledge relevant to the job.  
- Evaluate coding, problem-solving, system architecture, etc.  

👉 **Example Questions:**  
- "What’s the difference between REST and GraphQL?"  
- "Explain how garbage collection works in Java."  

✅ **Best For:** Software engineering, data analysis, IT roles.  

---

### 🔹 **(3) Role-Playing**
Tests how the candidate handles specific work scenarios.  
- Evaluates problem-solving, communication, and critical thinking.  

👉 **Example Questions:**  
- "A client is angry about a delayed project. How would you respond?"  
- "You discover an error in the budget. What’s your next step?"  

✅ **Best For:** Client-facing, managerial, and leadership roles.  

---

### 🔹 **(4) Personality Questions**
Tests soft skills, work style, and cultural fit.  
- Evaluates emotional intelligence, adaptability, and motivation.  

👉 **Example Questions:**  
- "What motivates you to perform better at work?"  
- "Describe your ideal work environment."  

✅ **Best For:** Sales, HR, and customer service roles.  

---

### 🔹 **(5) Management Skills**
Tests decision-making, team leadership, and conflict resolution.  
- Evaluates strategic thinking, delegation, and influence.  

👉 **Example Questions:**  
- "Describe a situation where you had to resolve a conflict within your team."  
- "How would you handle a situation where a team member was underperforming?"  

✅ **Best For:** Senior leadership and team lead roles.  

---

## 🚀 **3. Setting Up an Interview Sequence**
### 🔎 **Step-by-Step Guide:**
1. Go to **Dashboard → Job Vacancies**  
2. Select the job vacancy you want to configure.  
3. Go to the **Interview Setup** tab.  
4. Click **Add New Sequence**.  

✅ **Goal:** Create a structured interview sequence tailored to the job.  

---

### 🔹 **Step 1: Select Sequence Type**
Choose from the 5 predefined sequence types:  
✅ Work Experience  
✅ Technical Questions  
✅ Role-Playing  
✅ Personality Questions  
✅ Management Skills  

👉 **Example:**  
- Work Experience → 30%  
- Technical Questions → 40%  
- Role-Playing → 30%  

✅ **Goal:** Ensure balanced scoring across different criteria.  

---

### 🔹 **Step 2: Define Scoring Weights**
Set the weight of each sequence in the final interview score.

| Sequence Type | Weight (%) |
|--------------|------------|
| Work Experience | 30% |
| Technical Questions | 40% |
| Role-Playing | 30% |

👉 **Example:**  
- Total must equal **100%**.  
- If **Technical Questions** = 40%, it will contribute 40% to the final score.  

✅ **Goal:** Ensure a balanced evaluation process.  

---

### 🔹 **Step 3: Add Questions**
Add up to **10 questions** for each sequence.  
- Questions can be open-ended or multiple choice.  
- AI will evaluate open-ended questions based on goal alignment and scoring nature.  

👉 **Example:**  
- "What are the main benefits of using Docker?"  
- "Describe a situation where you solved a major technical problem."  

✅ **Goal:** Cover a mix of technical and behavioral questions.  

---

### 🔹 **Step 4: Set Time Limit**
Define how long the candidate has to complete the sequence.  

| Setting | Description | Example |
|---------|-------------|---------|
| **Total Time Limit** | Total time allowed to complete the interview | 30 minutes |
| **Time Per Question** | Time limit for each question | 2 minutes |
| **Buffer Time** | Extra time added if needed | 5 minutes |

👉 **Example:**  
- Total Time = 30 minutes  
- Buffer Time = 5 minutes  

✅ **Goal:** Ensure consistency in time limits across interviews.  

---

### 🔹 **Step 5: Define Evaluation Criteria**
You can define how AI should evaluate answers using these factors:

| Evaluation Factor | Description | Example |
|------------------|-------------|---------|
| **Goal Alignment** | How well the answer aligns with the question objective | 30% |
| **Winning Factors** | Positive indicators that improve the score | 30% |
| **Disqualifying Factors** | Negative indicators that reduce the score | 30% |
| **Time Limit Efficiency** | How effectively the candidate manages time | 10% |

👉 **Example:**  
- Goal Alignment → 30%  
- Disqualifying Factors → 30%  

✅ **Goal:** Ensure consistent and objective scoring.  

---

## 📊 **4. Interview Scoring Example**
**Job:** Backend Developer  
- Technical Questions → 40%  
- Goal Alignment = 30%  
- Winning Factors = 30%  
- Disqualifying Factors = 30%  
- Time Limit Efficiency = 10%  

👉 **Final Interview Score Calculation:**  
- Goal Alignment Score = 80% × 30% = **24%**  
- Winning Factors = 90% × 30% = **27%**  
- Disqualifying Factors = 60% × 30% = **18%**  
- Time Limit Efficiency = 70% × 10% = **7%**  

➡️ **Final Interview Score = 24 + 27 + 18 + 7 = 76%**  

✅ **Outcome:** Candidate moves to next stage if the score exceeds the pass threshold.  

---

## ✅ **5. Saving the Interview Sequence**
Once the sequence setup is complete:  
✅ Click **Save Sequence**  
✅ Advin will generate an AI interview based on the defined criteria  
✅ Candidates will be ranked based on their total score  

---

## 🏆 **6. Best Practices**
✔️ Use role-playing sequences for client-facing roles.  
✔️ Combine technical and work experience sequences for complex roles.  
✔️ Keep the time limit reasonable to reduce candidate pressure.  
✔️ Adjust scoring nature based on the job type (strict for technical roles, lenient for creative roles).  

---

Advin’s flexible interview sequence setup ensures that candidates are assessed objectively and consistently, improving hiring decisions and reducing time-to-hire. 😎
