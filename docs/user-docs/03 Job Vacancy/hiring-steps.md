---
sidebar_position: 4
---

# Hiring Steps

Advin provides a structured and automated hiring process, guiding candidates through a series of well-defined recruitment stages. Each hiring step is customizable, allowing you to align the process with your company’s recruitment strategy.

---

## 🏆 **1. Overview of Hiring Steps**
The hiring process in Advin follows a predefined flow:  
1. **Application Submission** → Candidates apply for the job  
2. **AI CV Screening** → Advin scores the CV based on job requirements  
3. **AI Interview** → Candidates participate in an AI-driven interview  
4. **Shortlist #1** → Candidates with the highest combined scores are shortlisted  
5. **Human Interview** → Final interview conducted by the recruitment team  
6. **Final Shortlist** → Final selection based on AI and human evaluation  
7. **Offering** → Job offer extended to the successful candidate  
8. **Accepted/Rejected** → Candidate accepts or rejects the offer  

✅ **Goal:** Automate and standardize the hiring process for consistency and efficiency.  

---

## 📝 **2. Default Hiring Steps**
Advin includes 8 default hiring steps that you can modify to match your internal hiring flow.  

### 🔹 **(1) Pending**
- The candidate has applied but has not yet been screened.  
- Advin automatically moves candidates to the next step when the CV is processed.  

👉 **Example:**  
- Candidates who meet the basic job criteria are moved to the next step.  
- Status: **Pending** → **AI CV Screening**  

✅ **Goal:** Automatically handle the initial application status.  

---

### 🔹 **(2) AI CV Screening**
- Advin evaluates the candidate’s CV based on the predefined CV scoring matrix.  
- Candidates receive a **CV Score** (0–100).  
- Candidates who exceed the minimum score threshold are moved to the next step.  

👉 **Example:**  
- Minimum CV Score: **60**  
- Candidates with CV Score ≥ 60 → Move to AI Interview  

✅ **Goal:** Shortlist qualified candidates using AI-based CV analysis.  

---

### 🔹 **(3) AI Interview**
- Candidates participate in an AI-driven interview.  
- The AI scores answers based on:  
   ✅ Goal Alignment  
   ✅ Winning Factors  
   ✅ Disqualifying Factors  
   ✅ Time Limit Efficiency  
- Candidates receive an **Interview Score** (0–100).  

👉 **Example:**  
- Minimum Interview Score: **70**  
- Candidates with Interview Score ≥ 70 → Move to Shortlist #1  

✅ **Goal:** Provide consistent and unbiased evaluation of candidate responses.  

---

### 🔹 **(4) Shortlist #1**
- Candidates with the highest combined CV + Interview Scores are shortlisted.  
- Recruiters review the list and select candidates for a human interview.  
- Top **5–10%** of candidates are typically moved to the next step.  

👉 **Example:**  
- Total Score = CV Score × 40% + Interview Score × 60%  
- Top 5 candidates → Move to Human Interview  

✅ **Goal:** Reduce recruiter workload by shortlisting the best candidates.  

---

### 🔹 **(5) Human Interview**
- A human recruiter conducts a final interview with shortlisted candidates.  
- The recruiter evaluates based on soft skills, personality, and culture fit.  
- The recruiter assigns a **Human Score** (0–100) based on the interview.  

👉 **Example:**  
- Candidate 1 → Human Score = 85  
- Candidate 2 → Human Score = 78  
- Candidate 3 → Human Score = 92  

✅ **Goal:** Confirm AI-based evaluation with human judgment.  

---

### 🔹 **(6) Final Shortlist**
- Candidates who meet the human evaluation criteria are moved to the final shortlist.  
- Top-ranked candidates are considered for the job offer.  

👉 **Example:**  
- Candidate 3 (92) → **Selected for Offer**  
- Candidate 2 (78) → **Backup Candidate**  

✅ **Goal:** Narrow down to the best candidates for the offer stage.  

---

### 🔹 **(7) Offering**
- The recruiter sends a job offer to the selected candidate.  
- Offer includes:  
   ✅ Job Title  
   ✅ Salary Package  
   ✅ Start Date  
   ✅ Contract Terms  

👉 **Example:**  
- Salary Offered = IDR 20,000,000  
- Start Date = 1 May 2025  

✅ **Goal:** Automate and streamline the offer process.  

---

### 🔹 **(8) Accepted/Rejected**
- The candidate either **accepts** or **rejects** the job offer.  
- If accepted:  
   ✅ Candidate is marked as **Hired**  
   ✅ Advin closes the vacancy  
- If rejected:  
   ✅ Recruiter can either approach a backup candidate or reopen the vacancy  

👉 **Example:**  
- Candidate accepts offer → Status = **Hired**  
- Candidate rejects offer → Status = **Rejected**  

✅ **Goal:** Finalize the hiring decision and close the vacancy.  

---

## 🔎 **3. Customizing Hiring Steps**
You can customize the hiring process based on the job complexity or internal workflow.

### 🔹 **Adding New Steps**  
1. Go to **Settings → Hiring Workflow**  
2. Click **Add New Step**  
3. Name the step and define its position in the workflow  
4. Set automated triggers to move to the next step  

👉 **Example:**  
- Add a **Background Check** step after Shortlist #1  

✅ **Goal:** Adapt the hiring process to internal company policies.  

---

### 🔹 **Reordering Steps**  
1. Drag and drop the steps into the desired order.  
2. Set triggers based on score thresholds.  

👉 **Example:**  
- Move **Human Interview** before **AI Interview** for specialized roles.  

✅ **Goal:** Adjust workflow for different job types.  

---

### 🔹 **Removing Steps**  
1. Select the step to remove.  
2. Confirm the deletion.  
3. Adjust score calculation settings if needed.  

👉 **Example:**  
- Remove **Final Shortlist** for simple hiring processes.  

✅ **Goal:** Simplify the hiring process for low-volume roles.  

---

## 🏆 **4. Example Hiring Flow**
**Position:** Backend Developer  
- **AI CV Screening:** Minimum score 60  
- **AI Interview:** Minimum score 70  
- **Shortlist:** Top 3 candidates based on total score  
- **Human Interview:** Top 2 candidates based on human evaluation  
- **Offer:** Best performing candidate receives the offer  

👉 **Final Score Calculation:**  
**Final Score = CV Score × 40% + Interview Score × 60%**  

✅ **Outcome:** Offer extended to highest-ranking candidate.  

---

## ✅ **5. Saving the Hiring Workflow**
Once all steps are defined:  
✅ Click **Save Workflow**  
✅ Advin will automatically apply the workflow to the selected job vacancy  
✅ Workflow settings can be copied to other vacancies  

---

## 🚀 **6. Best Practices**
✔️ Keep hiring steps consistent across similar roles.  
✔️ Use AI evaluation for high-volume recruitment.  
✔️ Adjust human involvement for senior or strategic roles.  
✔️ Regularly update workflows based on hiring performance.  

---

## 💡 **7. Troubleshooting**
| Problem | Cause | Solution |
|---------|-------|----------|
| Candidates not progressing | Score threshold too high | Lower minimum score or increase score weight |
| AI Interview completion rate low | Time limit too short | Increase total time limit |
| High rejection rate after human interview | AI evaluation too lenient | Adjust AI scoring nature to be more strict |

---

Advin’s flexible and automated hiring steps ensure that recruiters can focus on the most promising candidates, reduce time-to-hire, and improve overall hiring accuracy. 😎
