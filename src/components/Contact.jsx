// Contact.jsx
import Contact from './ContactComponent';
import { SectionWrapper } from "../hoc";

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;