import Input from '../../../components/ui/Input.jsx';
export default function PersonalDetailsForm({ personal, setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      personal: {
        ...prevData.personal,
        [name]: value,
      },
    }));
  };
  return (
    <section>
      <h2>Personal Details</h2>
      <form>
        <Input
          label="First Name:"
          name="firstName"
          value={personal.firstName}
          onChange={handleChange}
        />
        <Input
          label="Last Name:"
          name="lastName"
          value={personal.lastName}
          onChange={handleChange}
        />
        <Input
          label="Email:"
          name="email"
          type="email"
          value={personal.email}
          onChange={handleChange}
        />
        <Input
          label="Phone:"
          name="phone"
          type="tel"
          value={personal.phone}
          onChange={handleChange}
        />
        <Input label="City:" name="city" value={personal.city} onChange={handleChange} />
        <Input label="State:" name="state" value={personal.state} onChange={handleChange} />
        <Input label="Country:" name="country" value={personal.country} onChange={handleChange} />
      </form>
    </section>
  );
}
