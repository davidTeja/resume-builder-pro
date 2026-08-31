import { useState } from 'react';
import initialResume from '../../features/resume/initialResume.js';
import PersonalDetailsForm from '../../features/forms/components/PersonalDetailsForm.jsx';
import EducationForm from '../../features/forms/components/EducationForm.jsx';
import SkillsForm from '../../features/forms/components/SkillsForm.jsx';
import ExperienceForm from '../../features/forms/components/ExperienceForm.jsx';
import ProjectsForm from '../../features/forms/components/ProjectsForm.jsx';
import CertificationsForm from '../../features/forms/components/CertificationsForm.jsx';

const ResumeBuilderPage = () => {
  const [resumeData, setResumeData] = useState(initialResume);
  return (
    <>
      <h1>Resume Builder Pro</h1>
      <PersonalDetailsForm personal={resumeData.personal} setResumeData={setResumeData} />
      <EducationForm education={resumeData.education} setResumeData={setResumeData} />
      <SkillsForm skills={resumeData.skills} setResumeData={setResumeData} />
      <ExperienceForm experience={resumeData.experience} setResumeData={setResumeData} />
      <ProjectsForm projects={resumeData.projects} setResumeData={setResumeData} />
      <CertificationsForm
        certifications={resumeData.certifications}
        setResumeData={setResumeData}
      />
    </>
  );
};

export default ResumeBuilderPage;
