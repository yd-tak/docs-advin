---
sidebar_position: 2
---

# Scoring Formula Setup

Advin allows you to define a **custom scoring formula** to evaluate candidates based on both their CV and interview performance. You can adjust the weight of CV scores and interview scores, set evaluation strictness, and define score penalties to match your recruitment needs.

You can access the menu from **SETTING > SCORING MATRIX**

---

## 🏆 **1. Total Score Formula**
The total score is calculated using a weighted formula that combines the **CV Score** and the **Interview Score**.

### 🔹 **How to Configure:**
1. Go to **Settings → Scoring Formula**.  
2. Set the **CV Score Weight** (0% – 100%).  
3. Set the **Interview Score Weight** (0% – 100%).  

👉 **Example:**  
- CV Score Weight = **30%**  
- Interview Score Weight = **70%**  

➡️ Final Score = (CV Score × 30%) + (Interview Score × 70%)  

✅ **Goal:** Define the relative importance of CV vs Interview performance in the final score.  

![Total Score Setting](/screenshots/total-score-formula.png)

---

## 🤖 **2. AI Scoring Nature**
You can adjust the AI scoring nature to control how strict or lenient the AI evaluation is.

### 🔹 **Options:**  
| Scoring Type | Description |
|-------------|-------------|
| **Very Harsh** | AI applies the strictest evaluation, focusing on technical accuracy and hard criteria. |
| **Harsh** | AI leans towards a stricter evaluation, reducing score variations and focusing on accuracy. |
| **Neutral** | Balanced evaluation with equal focus on accuracy and flexibility. |
| **Lenient** | AI applies more flexible scoring, allowing for slightly more positive interpretations. |
| **Very Lenient** | AI prioritizes a positive interpretation and reduces strictness. |

👉 **Example:**  
- If set to **Very Harsh**, minor mistakes will significantly lower the candidate's score.  
- If set to **Very Lenient**, minor mistakes are overlooked, and the AI focuses on strengths.  

✅ **Goal:** Adjust AI flexibility based on the type of role or company culture.  

![Scoring Nature](/screenshots/scoring-nature.png)

---

## 🚨 **3. Total Score Penalty**
Advin allows you to set penalties for candidates whose salary expectations exceed your budget.

### 🔹 **Penalty Configuration:**
| Penalty Type | Penalty (%) | Effect |
|-------------|-------------|--------|
| **Penalty for 10% Over Budget** | 10% | Reduces total score by 10% |
| **Penalty for 20% Over Budget** | 20% | Reduces total score by 20% |
| **Penalty for 50% Over Budget** | 40% | Reduces total score by 40% |
| **Penalty for 100% Over Budget** | 60% | Reduces total score by 60% |

👉 **Example:**  
- If a candidate’s expected salary exceeds the budget by 20%, and the penalty is set at 20%, their final score will be reduced by 20%.  

✅ **Goal:** Ensure candidates align with budget expectations.  

![Scoring Penalty](/screenshots/scoring-penalty.png)

---

## 📄 **4. CV Score Matrix**
Advin allows you to define how CV components are weighted in the total CV score.

### 🔹 **Configuration Options:**  
| CV Component | Description | Weight (%) |
|--------------|-------------|------------|
| **Relevant Work Experience** | Matches previous roles and responsibilities to job vacancy | 30% |
| **Work Experience** | Total years of experience | 10% |
| **Relevant Education Experience** | Alignment of education with job requirements | 15% |
| **Education** | General degree and qualifications | 5% |
| **Skills** | Relevant technical and soft skills | 20% |
| **Certifications** | Relevant professional certifications | 10% |
| **Language Proficiency** | Multilingual ability | 5% |
| **Industry Experience** | Experience in the same industry as the hiring company | 5% |

👉 **Example:**  
- If **Relevant Work Experience** is weighted at 30%, and a candidate scores 90%, the weighted score for this component is **90 × 30% = 27**.  

✅ **Goal:** Ensure CV components are scored based on job relevance.  

![CV Scoring Matrix](/screenshots/cv-scoring-matrix.png)

---

## 🎙️ **5. Interview Score Matrix**
You can adjust how each part of the AI interview is scored.

### 🔹 **Configuration Options:**  
| Interview Component | Description | Weight (%) |
|---------------------|-------------|------------|
| **Goal Alignment** | Measures how well the candidate’s answers align with the interview goals | 30% |
| **Winning Factors** | Positive indicators of performance | 30% |
| **Disqualifying Factors** | Negative indicators or key mistakes | 30% |
| **Time Limit Efficiency** | How well the candidate manages time | 10% |

👉 **Example:**  
- If **Goal Alignment** is weighted at 30%, and the candidate scores 80%, the weighted score is **80 × 30% = 24**.  

✅ **Goal:** Align interview scoring with the company’s hiring priorities.  

![Interview Scoring Matrix](/screenshots/interview-scoring-matrix.png)

---

## 🎯 **6. CV Score Definitions**
You can define how the final CV score is labeled for easy interpretation.

| Min Score | Max Score | Score Label | Description |
|-----------|-----------|-------------|-------------|
| 0 | 39 | Rejected | Candidate does not meet minimum requirements |
| 40 | 44 | Not Suitable | Lacks essential qualifications |
| 45 | 49 | Needs Significant Improvement | Major gaps in CV |
| 50 | 54 | Needs Improvement | Meets some basic criteria |
| 55 | 59 | Below Average | Somewhat qualified, needs development |
| 60 | 64 | Average | Meets minimum requirements |
| 65 | 69 | Decent | Meets expectations, some weaknesses |
| 70 | 74 | Good | Meets most requirements |
| 75 | 79 | Very Good | Strong fit for the role |
| 80 | 84 | Excellent | Highly recommended |
| 85 | 89 | Outstanding | Ideal fit with exceptional qualifications |
| 90 | 100 | Exceptional | Best possible candidate |

✅ **Goal:** Create consistency in candidate evaluation.  

---

## 🏆 **7. Interview Score Definitions**
You can define how the final interview score is labeled for easy interpretation.

| Min Score | Max Score | Score Label | Description |
|-----------|-----------|-------------|-------------|
| 0 | 39 | Rejected | Fails to communicate effectively |
| 40 | 49 | Weak | Struggles with problem-solving |
| 50 | 59 | Needs Improvement | Lacks confidence and technical depth |
| 60 | 69 | Average | Room for improvement |
| 70 | 74 | Good | Strong problem-solving and communication |
| 75 | 79 | Very Good | Strong fit for the role |
| 80 | 84 | Excellent | Highly recommended |
| 85 | 89 | Outstanding | Ideal fit, exceeded expectations |
| 90 | 100 | Exceptional | Best possible choice |

✅ **Goal:** Provide clear feedback on interview performance.  

---

## ✅ **Best Practices**
- Keep the CV and Interview Score weights balanced unless specific roles require more focus on one over the other.  
- Adjust scoring nature based on the job complexity and industry standards.  
- Keep the penalty moderate to avoid disqualifying good candidates.  

---

Advin’s scoring flexibility ensures that recruitment teams can align evaluation criteria with business needs, improving both the efficiency and quality of hiring decisions. 😎
