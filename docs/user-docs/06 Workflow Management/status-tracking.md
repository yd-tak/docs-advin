---
sidebar_position: 2
---

# Status Tracking

Advin includes a **real-time status tracking** system that allows recruiters to monitor candidate progress throughout the hiring process. The system provides automatic status updates, notifications, and detailed tracking reports.

---

## 🏆 **1. What is Status Tracking?**
**Status Tracking** allows recruiters to monitor candidate progress across different hiring stages.  
✅ Tracks candidates from application to final decision  
✅ Automatically updates candidate status based on progress  
✅ Provides real-time visibility into the recruitment pipeline  

✅ **Goal:** Ensure recruiters have full visibility into the hiring process.  

---

## 🔎 **2. How Status Tracking Works**
Advin automatically assigns and updates candidate statuses based on predefined rules and candidate progress.

### ✅ **How It Works:**
1. Candidate applies → Status = **Pending**  
2. Candidate passes AI CV screening → Status = **Shortlisted**  
3. Candidate completes AI Interview → Status = **Interviewed**  
4. Candidate is selected for human interview → Status = **Final Shortlist**  
5. Candidate receives offer → Status = **Offer Sent**  
6. Candidate accepts offer → Status = **Hired**  

✅ **Goal:** Create a structured and transparent hiring pipeline.  

---

## 🚀 **3. Default Statuses**
Advin includes a set of default statuses that automatically update based on the hiring stage.

| Status | Description | Trigger Event |
|--------|-------------|---------------|
| **Pending** | Candidate has applied but not yet processed | Application received |
| **Screened** | Candidate passed AI CV screening | CV Score exceeds threshold |
| **Interviewed** | Candidate completed AI interview | AI Interview Score exceeds threshold |
| **Shortlisted** | Candidate passed initial evaluation | Final Score exceeds threshold |
| **Final Shortlist** | Candidate selected for human interview | Human Interview Score exceeds threshold |
| **Offer Sent** | Job offer sent to the candidate | Offer created |
| **Accepted** | Candidate accepted the job offer | Offer accepted |
| **Rejected** | Candidate did not meet criteria | Score below threshold or manually rejected |

✅ **Goal:** Keep candidate status updated automatically.  

---

## 🎯 **4. Status Update Triggers**
You can define **custom triggers** to automatically update the candidate's status.

### ✅ **AI CV Screening Trigger**
- If CV Score ≥ Minimum Score → Status = **Screened**  
- If CV Score < Minimum Score → Status = **Rejected**  

👉 **Example:**  
- Minimum CV Score = **70%**  
- Candidate A → 85% → ✅ Screened  
- Candidate B → 60% → ❌ Rejected  

---

### ✅ **AI Interview Trigger**
- If Interview Score ≥ Minimum Score → Status = **Interviewed**  
- If Interview Score < Minimum Score → Status = **Rejected**  

👉 **Example:**  
- Minimum Interview Score = **75%**  
- Candidate A → 82% → ✅ Interviewed  
- Candidate B → 68% → ❌ Rejected  

---

### ✅ **Shortlisting Trigger**
- If Final Score ≥ Shortlist Threshold → Status = **Shortlisted**  
- If Final Score < Shortlist Threshold → Status = **Rejected**  

👉 **Example:**  
- Minimum Final Score = **80%**  
- Candidate A → 85% → ✅ Shortlisted  
- Candidate B → 78% → ❌ Rejected  

---

### ✅ **Human Interview Trigger**
- If Human Interview Score ≥ Passing Score → Status = **Final Shortlist**  
- If Human Interview Score < Passing Score → Status = **Rejected**  

👉 **Example:**  
- Minimum Human Interview Score = **80%**  
- Candidate A → 85% → ✅ Final Shortlist  
- Candidate B → 75% → ❌ Rejected  

---

### ✅ **Offer Sent Trigger**
- If Offer Created → Status = **Offer Sent**  

👉 **Example:**  
- Candidate A → Offer Created → ✅ Status = Offer Sent  

---

### ✅ **Offer Accepted/Rejected Trigger**
- If Offer Accepted → Status = **Hired**  
- If Offer Rejected → Status = **Offer Rejected**  

👉 **Example:**  
- Candidate A → Offer Accepted → ✅ Status = Hired  
- Candidate B → Offer Rejected → ❌ Status = Rejected  

✅ **Goal:** Automate candidate status updates for better efficiency.  

---

## 📊 **5. Example Status Flow**
**Position:** Senior Software Engineer  
- Minimum CV Score = **70%**  
- Minimum Interview Score = **75%**  
- Minimum Human Interview Score = **80%**  

### **Candidate Flow:**
| Stage | Status | Trigger Event | Outcome |
|-------|--------|---------------|---------|
| **Application Received** | ✅ Pending | Application Submitted | Proceed to CV Screening |
| **AI CV Screening** | ✅ Screened (85%) | Score ≥ 70% | Proceed to AI Interview |
| **AI Interview** | ✅ Interviewed (82%) | Score ≥ 75% | Proceed to Shortlisting |
| **Shortlist** | ✅ Shortlisted (84%) | Score ≥ 80% | Proceed to Human Interview |
| **Human Interview** | ✅ Final Shortlist (90%) | Score ≥ 80% | Proceed to Offer |
| **Offer Sent** | ✅ Offer Sent | Offer Created | Await Candidate Response |
| **Accepted** | ✅ Hired | Offer Accepted | Hired ✅ |

✅ **Goal:** Ensure seamless status progression through hiring stages.  

---

## 🔄 **6. Bulk Status Update**
Advin allows you to update candidate status in bulk using the **Bulk Processing** feature.

### ✅ **How to Bulk Update Status:**
1. Go to **Dashboard → Applicants**  
2. Select multiple candidates  
3. Choose an action:  
   - **Advance to Next Stage**  
   - **Reject**  
   - **Send Offer**  
4. Confirm action  

👉 **Example:**  
- 5 Candidates selected → Status updated to **Screened**  

✅ **Goal:** Speed up high-volume candidate processing.  

---

## 🔁 **7. Manual Status Override**
Advin allows recruiters to manually override status if necessary.

### ✅ **How to Override Status:**
1. Go to **Dashboard → Applicants**  
2. Select the candidate  
3. Update status manually  
4. Confirm change  

👉 **Example:**  
- Candidate skipped AI Interview due to technical error → Manually update status to **Interviewed**  

✅ **Goal:** Ensure flexibility for exceptional cases.  

---

## 🚀 **8. Status Reports**
Advin provides detailed status reports to help recruiters analyze the recruitment process.

### ✅ **Available Reports:**
| Report Type | Description |
|-------------|-------------|
| **Candidate Pipeline Report** | Overview of candidate status across all vacancies |
| **Conversion Rate Report** | Percentage of candidates progressing through each stage |
| **Rejection Rate Report** | Percentage of candidates rejected at each stage |
| **Time-to-Hire Report** | Average time from application to offer acceptance |

👉 **Example:**  
- 120 Applicants → 30% Passed CV Screening → 10% Received Offer → 5% Hired  

✅ **Goal:** Monitor hiring performance and identify bottlenecks.  

---

## ✅ **9. Saving Status Configuration**
Once the status configuration is complete:  
✅ Click **Save Settings**  
✅ Advin will automatically apply status rules to future applicants  
✅ Status updates will reflect in real-time  

---

## 🏆 **10. Best Practices**
✔️ Keep passing scores realistic to avoid high rejection rates.  
✔️ Use bulk updates for high-volume recruitment.  
✔️ Allow manual overrides for flexibility.  
✔️ Monitor status reports to adjust scoring thresholds if needed.  

---

## 💡 **11. Troubleshooting**
| Problem | Cause | Solution |
|---------|-------|----------|
| **Candidates not progressing** | Threshold too high | Lower the minimum score |
| **High rejection rate** | Strict AI scoring | Adjust scoring weights |
| **Incorrect status** | Workflow misconfigured | Review and update workflow |
| **Status not updating** | System delay | Refresh or manually update status |

---

## 🚀 **12. Summary**
Advin’s Status Tracking system ensures that candidate progress is automatically tracked and updated based on real-time performance:  
✅ Structured status flow  
✅ Automatic and manual updates  
✅ Bulk processing and real-time reporting  

---

Advin’s real-time status tracking ensures that recruiters stay informed and responsive, improving overall recruitment efficiency. 😎
