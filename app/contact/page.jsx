"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92)306 366 7578",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "chandiok96@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Sindh Pakistan",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstname.trim()) {
      newErrors.firstname = 'First name is required';
    }
    
    if (!formData.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        toast.success('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <Toaster position="top-right" />
      
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <Input 
                    type="text" 
                    name="firstname" 
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className={errors.firstname ? 'border-red-500' : ''}
                  />
                  {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>}
                </div>

                <div className="flex flex-col gap-1">
                  <Input 
                    type="text" 
                    name="lastname" 
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className={errors.lastname ? 'border-red-500' : ''}
                  />
                  {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname}</span>}
                </div>

                <div className="flex flex-col gap-1">
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1">
                  <Input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Select 
                  name="service" 
                  value={formData.service}
                  onValueChange={(value) => {
                    setFormData(prev => ({ ...prev, service: value }));
                    if (errors.service) {
                      setErrors(prev => ({ ...prev, service: '' }));
                    }
                  }}
                >
                  <SelectTrigger className={`w-full ${errors.service ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/UX">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && <span className="text-red-500 text-sm">{errors.service}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <Textarea
                  name="message"
                  className={`h-full ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>

              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index)=>{
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
