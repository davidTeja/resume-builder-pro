const initialResume = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
  },
  education: [
    {
      id: '',
      college: '',
      startYear: '',
      endYear: '',
      degree: '',
      cgpa: '',
    },
  ],
  skills: [],
  experience: [
    {
      id: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    },
  ],
  projects: [
    {
      id: '',
      title: '',
      description: '',
      link: '',
    },
  ],
  certifications: [
    {
      id: '',
      name: '',
      issuer: '',
      date: '',
    },
  ],

  templateId: null,
};

export default initialResume;
