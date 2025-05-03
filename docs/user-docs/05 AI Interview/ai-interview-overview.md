---
sidebar_position: 1
---

# AI Interview Overview

Advin includes an advanced **AI-driven interview system** that automates the candidate evaluation process. The AI interview is designed to assess both **technical and soft skills** through structured questions and automated scoring.

---

## 🏆 **1. What is an AI Interview?**
An **AI Interview** is an automated interview process where Advin’s AI evaluates candidate responses based on:  
✅ Goal Alignment  
✅ Technical Accuracy  
✅ Soft Skills  
✅ Communication Style  
✅ Decision-Making  

Advin generates structured questions based on job requirements and evaluates candidate answers using predefined scoring criteria.  

✅ **Goal:** Automate and improve the consistency of candidate evaluation.  

---

## 🧠 **2. How AI Interview Works**
The AI Interview process in Advin follows a structured flow:  

### 🔹 **(1) Interview Creation**
- Recruiter defines the interview type and format  
- AI generates the questions based on job requirements  
- Recruiter sets scoring criteria and weight  

👉 **Example:**  
- Interview Type → **Technical + Behavioral**  
- Questions → **10 Questions**  
- Scoring → **Goal Alignment = 40%, Technical Accuracy = 40%, Soft Skills = 20%**  

✅ **Goal:** Ensure the interview reflects job-specific requirements.  

![Interview Sequence](/screenshots/interview-sequence.png)

---

### 🔹 **(2) Candidate Invitation**
- Candidates receive an invitation via email  
- Candidate logs into the Advin portal  
- Interview must be completed within a defined time limit  

👉 **Example:**  
- Email sent to candidate → **User Defined-days expiration**  
- Candidate logs in and starts the interview  

✅ **Goal:** Provide a smooth candidate experience.  

![Interview Email](/screenshots/interview-email.png)

---

### 🔹 **(3) AI-Based Evaluation**
Advin’s AI evaluates answers based on four key dimensions:  

| Evaluation Factor | Description | Example |
|------------------|-------------|---------|
| **Goal Alignment** | How well the answer addresses the question objective | "Describe your approach to managing a team project." |
| **Technical Accuracy** | Correctness and depth of the answer | "Explain how to optimize a SQL query." |
| **Soft Skills** | Communication style, tone, and clarity | "How would you resolve a team conflict?" |
| **Decision-Making** | Logical approach to problem-solving | "Describe a time you had to make a quick decision." |

👉 **Example:**  
- Goal Alignment → **85%**  
- Technical Accuracy → **90%**  
- Soft Skills → **80%**  
- Decision-Making → **75%**  

✅ **Goal:** Provide a consistent and objective evaluation of candidate responses.  

![Interview Detail](/screenshots/interview-detail-2.png)

---

### 🔹 **(4) Scoring Calculation**
The AI assigns a weighted score based on the defined scoring structure:  

**Final Interview Score** =  
*(Goal Alignment × Weight) +*  
*(Technical Accuracy × Weight) +*  
*(Soft Skills × Weight) +*  
*(Decision-Making × Weight)*  

👉 **Example:**  
- Goal Alignment = 40%  
- Technical Accuracy = 40%  
- Soft Skills = 20%  

➡️ **Final Score** = (85% × 40%) + (90% × 40%) + (80% × 20%)  
➡️ **Final Score** = **86%**  

✅ **Goal:** Generate a balanced and fair interview score.  

![Interview Raport](/screenshots/interview-raport.png)

---

### 🔹 **(5) Passing Threshold**
You can set a minimum passing score for each job type:  

| Job Level | Minimum Passing Score (%) |
|-----------|---------------------------|
| **Entry-Level** | 60% |
| **Mid-Level** | 70% |
| **Senior-Level** | 80% |
| **Executive-Level** | 85% |

👉 **Example:**  
- Minimum Passing Score = **70%**  
- Candidate Score = **86%** → ✅ **Pass**  
- Candidate Score = **65%** → ❌ **Fail**  

✅ **Goal:** Automate the filtering of unqualified candidates.  

---

## 📝 **3. Types of AI Interviews**
You can configure different types of AI interviews depending on the job type and complexity.

### 🔹 **(1) Technical Interview**
- Focuses on technical skills and problem-solving.  
- Ideal for engineering, IT, and data roles.  

👉 **Example Questions:**  
- "Explain the difference between REST and GraphQL."  
- "How would you debug a memory leak in a Node.js app?"  

✅ **Goal:** Test core technical knowledge and problem-solving skills.  

---

### 🔹 **(2) Behavioral Interview**
- Focuses on soft skills, leadership, and decision-making.  
- Ideal for managerial and leadership roles.  

👉 **Example Questions:**  
- "Describe a time when you had to motivate your team under pressure."  
- "How would you handle a disagreement with your supervisor?"  

✅ **Goal:** Evaluate personality and team management skills.  

---

### 🔹 **(3) Situational Interview**
- Focuses on how candidates handle real-life scenarios.  
- Ideal for customer service, sales, and operational roles.  

👉 **Example Questions:**  
- "A customer is unhappy with a delayed order. How would you handle it?"  
- "You missed a project deadline. What steps would you take next?"  

✅ **Goal:** Assess quick thinking and problem resolution skills.  

---

### 🔹 **(4) Mixed Interview**
- Combines technical and behavioral questions.  
- Ideal for strategic and cross-functional roles.  

👉 **Example Questions:**  
- "Explain how you would approach a failing product launch."  
- "Describe a time when you had to learn a new technology quickly."  

✅ **Goal:** Test a broad range of skills.  

---

## 🚀 **4. Configuring an AI Interview**
### ✅ **How to Set Up:**
1. Go to **Settings → AI Interview**  
2. Define the interview type (Technical, Behavioral, Situational, or Mixed)  
3. Add up to **10 questions**  
4. Define scoring weights for each evaluation factor  
5. Set the passing threshold  

👉 **Example:**  
- Type → Mixed  
- Questions → 10  
- Goal Alignment → 40%, Technical Accuracy → 40%, Soft Skills → 20%  
- Passing Score → 70%  

✅ **Goal:** Create a structured and consistent AI interview process.  

---

## 📊 **5. AI Interview Scoring Example**
| Evaluation Factor | Score (%) | Weight (%) | Contribution (%) |
|------------------|------------|-------------|-------------------|
| **Goal Alignment** | 85% | 40% | 34% |
| **Technical Accuracy** | 90% | 40% | 36% |
| **Soft Skills** | 80% | 20% | 16% |
| **Decision-Making** | 75% | 0% | 0% |
| **Final Score** | - | - | **86%** |

➡️ **Final Interview Score = 86%** ✅  
➡️ **Outcome = Shortlisted**  

✅ **Goal:** Ensure a balanced and objective evaluation.  

---

## ✅ **6. Saving AI Interview Configuration**
Once the AI Interview is configured:  
✅ Click **Save Settings**  
✅ Advin will automatically apply the interview settings to new job postings  
✅ Scoring adjustments will reflect immediately  

---

## 🏆 **7. Best Practices**
✔️ Use higher weight for technical skills in engineering roles.  
✔️ Include situational questions for customer-facing roles.  
✔️ Set strict passing thresholds for senior-level roles.  
✔️ Monitor AI scoring patterns and adjust settings if needed.  

---

## 💡 **8. Troubleshooting**
| Problem | Cause | Solution |
|---------|-------|----------|
| **Low pass rate** | Passing threshold too high | Lower the passing score |
| **Inconsistent scores** | Incorrect scoring weights | Adjust scoring balance |
| **AI-generated questions irrelevant** | Weak job description | Improve job criteria and details |
| **Candidates dropping out** | Interview too long | Reduce the number of questions |

---

## 🚀 **9. Summary**
Advin’s AI Interview system automates candidate evaluation with high accuracy and consistency.  
✅ Fully configurable interview flow  
✅ Automated scoring based on goal alignment and technical accuracy  
✅ Real-time reporting and scoring  

---

Advin’s AI Interview ensures that only the most suitable candidates progress to the next stage, improving hiring accuracy and reducing recruiter workload. 😎
