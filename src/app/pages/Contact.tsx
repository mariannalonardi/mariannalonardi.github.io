import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6 text-gray-900">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I am currently looking for an internship opportunity where I can further develop my skills in UX/UI design, interactive prototyping, and the creation of meaningful user experiences across digital and physical contexts.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl mb-8 text-gray-900 text-center">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">Email</h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    mariannalonardi03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/marianna-lonardi-783157355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Marianna Lonardi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-gray-900">Location</h3>
                  <p className="text-gray-600">Ticino, Switzerland</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
              <h3 className="text-xl mb-4 text-gray-900">Availability</h3>
              <p className="text-gray-600 mb-4">
                I'm currently seeking opportunities to apply my interaction design skills 
                in a professional setting and continue learning.
              </p>
              <p className="text-gray-600">
                <strong>Open to:</strong>
              </p>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>• Full-time internships</li>
                <li>• Junior interaction designer positions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}