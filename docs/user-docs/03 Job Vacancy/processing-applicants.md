---
sidebar_position: 2
---

# Processing Applicants

Advin automates the processing of applicants through a structured workflow. Each applicant is evaluated and advanced (or rejected) based on AI-generated scores, recruiter input, and predefined criteria.

---

## 🏆 **1. What is Applicant Processing?**
**Applicant Processing** is the automated flow that manages a candidate's progression through the recruitment stages, including:  
✅ AI CV Screening  
✅ AI Interview  
✅ Shortlisting  
✅ Human Interview  
✅ Final Selection  

✅ **Goal:** Streamline the recruitment process and reduce manual effort.  

---

## 🔎 **2. How Applicant Processing Works**
Advin follows a structured process to evaluate and process applicants:

### 🔹 **(1) Application Received**
- Candidate applies through the job portal  
- Advin sends a confirmation email  
- Candidate status = **Pending**  

👉 **Example:**  
- Candidate applies for **Backend Developer** position → Status = **Pending**  

✅ **Goal:** Capture candidate application details.  

---

### 🔹 **(2) AI CV Screening**
- AI scans the candidate’s CV using OCR  
- AI extracts and scores CV based on predefined criteria  
- Candidates above the minimum threshold are moved to the next stage  

👉 **Example:**  
- CV Score = **75%** → ✅ **Shortlisted**  
- CV Score = **45%** → ❌ **Rejected**  

✅ **Goal:** Filter unqualified candidates automatically.  

---

### 🔹 **(3) AI Interview**
- Candidate receives an invitation to complete the AI interview  
- AI evaluates answers based on scoring configuration:  
   ✅ Goal Alignment  
   ✅ Technical Accuracy  
   ✅ Soft Skills  
   ✅ Decision-Making  
- Candidates above the passing threshold are moved to the next stage  

👉 **Example:**  
- Interview Score = **82%** → ✅ **Shortlisted**  
- Interview Score = **55%** → ❌ **Rejected**  

✅ **Goal:** Automate interview processing and ranking.  

---

### 🔹 **(4) Shortlisting**
- Candidates are ranked based on combined CV and Interview scores:  

**Final Score =**  
*(CV Score × CV Weight) +*  
*(Interview Score × Interview Weight)*  

👉 **Example:**  
| Candidate | CV Score (%) | Interview Score (%) | Final Score (%) | Status |
|----------|---------------|---------------------|-----------------|--------|
| **Candidate A** | 75% | 85% | 80% | ✅ Shortlisted |
| **Candidate B** | 65% | 70% | 68% | ❌ Rejected |
| **Candidate C** | 80% | 60% | 70% | ✅ Shortlisted |

✅ **Goal:** Focus on top-performing candidates for human evaluation.  

---

### 🔹 **(5) Human Interview**
- Recruiter conducts the final human interview  
- Final score = Combined AI Score + Human Score  

👉 **Example:**  
- AI Score = **80%**  
- Human Interview Score = **85%**  
➡️ **Final Score = (80% + 85%) ÷ 2 = 82.5%** ✅  

✅ **Goal:** Combine AI insights with human judgment.  

---

### 🔹 **(6) Offer Stage**
- Top candidate(s) receive an automated job offer  
- Offer includes:  
   ✅ Job Title  
   ✅ Salary Package  
   ✅ Start Date  
   ✅ Contract Terms  

👉 **Example:**  
- Candidate accepts offer → Status = **Hired**  
- Candidate rejects offer → Status = **Offer Rejected**  

✅ **Goal:** Automate the offer process and status updates.  

---

### 🔹 **(7) Status Updates**
Advin automatically updates the status based on applicant progress:  

| Status | Description | Example |
|--------|-------------|---------|
| **Pending** | Candidate applied but not yet processed | Application received |
| **Screened** | Candidate passed AI CV screening | Shortlisted |
| **Interviewed** | Candidate completed AI interview | Scored |
| **Shortlisted** | Candidate passed initial evaluation | Shortlisted |
| **Human Interview** | Candidate selected for human interview | Interview Scheduled |
| **Offer Sent** | Candidate received a job offer | Sent |
| **Accepted** | Candidate accepted the job offer | Hired |
| **Rejected** | Candidate rejected after evaluation | Rejected |

✅ **Goal:** Maintain real-time status tracking for recruiters.  

---

## 📊 **3. Example Workflow**
**Position:** Backend Developer  
- Minimum CV Score: **70%**  
- Minimum Interview Score: **75%**  
- Final Passing Score: **80%**  

| Stage | Status | Outcome |
|-------|--------|---------|
| **Application Received** | ✅ Completed | Status = Pending |
| **AI CV Screening** | ✅ Passed (Score = 80%) | Status = Shortlisted |
| **AI Interview** | ✅ Passed (Score = 85%) | Status = Interviewed |
| **Human Interview** | ✅ Completed (Score = 90%) | Status = Final Shortlist |
| **Offer** | ✅ Sent | Status = Offer Sent |
| **Accepted** | ✅ Accepted | Status = Hired |

✅ **Goal:** Ensure candidates are processed smoothly through all stages.  

---

## 🚀 **4. Processing Applicants in Bulk**
Advin allows you to process multiple applicants at once using the **Bulk Processing** feature:

### ✅ **How to Bulk Process Applicants:**
1. Go to **Dashboard → Applicants**  
2. Select multiple candidates  
3. Choose an action:  
   - **Advance to Next Stage**  
   - **Reject**  
   - **Send Interview Invitation**  
4. Confirm action  

👉 **Example:**  
- 10 Candidates selected → Advanced to AI Interview  

✅ **Goal:** Speed up high-volume hiring.  

---

## 🔄 **5. Reprocessing Rejected Candidates**
Advin allows you to reprocess rejected candidates if needed:

### ✅ **How to Reprocess a Candidate:**
1. Go to **Dashboard → Rejected Applicants**  
2. Select the candidate  
3. Click **Reprocess**  
4. Candidate is moved back to the previous stage  

👉 **Example:**  
- Candidate missed AI Interview → Reprocess → AI Interview Stage  

✅ **Goal:** Avoid losing qualified candidates due to technical errors or scheduling conflicts.  

---

## ✅ **6. Saving Applicant Processing Settings**
Once the applicant processing flow is configured:  
✅ Click **Save Settings**  
✅ Advin will automatically apply the flow to future applicants  
✅ Status updates and scoring will reflect in real-time  

---

## 🏆 **7. Best Practices**
✔️ Use AI screening to reduce manual effort.  
✔️ Set realistic CV and Interview passing thresholds.  
✔️ Allow reprocessing to give candidates a second chance.  
✔️ Automate status updates for better transparency.  
✔️ Monitor dropout rates and adjust time limits if needed.  

---

## 💡 **8. Troubleshooting**
| Problem | Cause | Solution |
|---------|-------|----------|
| **Low pass rate** | Passing threshold too high | Lower the threshold |
| **High rejection rate after human interview** | AI scoring too lenient | Adjust AI scoring nature |
| **Candidates not completing AI Interview** | Time limit too strict | Increase time limit |
| **Incorrect status updates** | Workflow misconfigured | Adjust workflow settings |

---

## 🚀 **9. Summary**
Advin’s Applicant Processing system ensures that candidates are evaluated consistently and efficiently:  
✅ AI-based CV and Interview Screening  
✅ Automated Status Updates  
✅ Bulk Processing and Reprocessing  
✅ Real-Time Candidate Tracking  

---

Advin’s automated processing flow reduces recruitment time and ensures that only the most suitable candidates progress to the final stage. 😎
