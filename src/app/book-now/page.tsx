'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Asterisk } from 'lucide-react';

const packages = [
  "4D3N Sipadan Cruise",
  "5D4N Sipadan Adventure",
  "Private Charter",
] as const;

const certificationLevels = [
  "Advanced Open Water",
  "Rescue Diver",
  "Divemaster",
  "Instructor",
] as const;

interface FormData {
  name: string;
  email: string;
  phone: string;
  package: string;
  tripDate: string;
  divers: string;
  certification: string;
  diveExperience: string;
  nitrox: boolean;
  equipment: boolean;
  message: string;
}

type RequiredFields = 'name' | 'email' | 'phone' | 'package' | 'tripDate' | 'certification';

export default function BookNow() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    package: '',
    tripDate: '',
    divers: '1',
    certification: '',
    diveExperience: '',
    nitrox: false,
    equipment: false,
    message: '',
  });

  useEffect(() => {
    const packageFromUrl = searchParams.get('package');
    if (packageFromUrl) {
      let packageName = "";
      switch(packageFromUrl) {
        case '4d3n':
          packageName = "4D3N Sipadan Cruise";
          break;
        case '5d4n':
          packageName = "5D4N Sipadan Adventure";
          break;
        case 'charter':
          packageName = "Private Charter";
          break;
      }
      if (packageName) {
        setFormData(prev => ({ ...prev, package: packageName }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const isFormValid = () => {
    const requiredFields: RequiredFields[] = ['name', 'email', 'phone', 'package', 'tripDate', 'certification'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      toast({
        title: "Booking Request Sent",
        description: "Thank you for your interest. We will contact you within 24 hours to confirm availability and details.",
      });
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        tripDate: '',
        divers: '1',
        certification: '',
        diveExperience: '',
        nitrox: false,
        equipment: false,
        message: '',
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Book Your Sipadan Adventure</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Complete the form below and we'll get back to you within 24 hours
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Booking Request</CardTitle>
              <CardDescription>Fields marked with <Asterisk className="inline h-3 w-3 text-red-500" /> are required</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Full Name <Asterisk className="inline h-3 w-3 text-red-500" />
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Email <Asterisk className="inline h-3 w-3 text-red-500" />
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Phone Number <Asterisk className="inline h-3 w-3 text-red-500" />
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your contact number with country code"
                    />
                  </div>
                </div>

                {/* Trip Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Trip Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Package <Asterisk className="inline h-3 w-3 text-red-500" />
                      </label>
                      <Select
                        value={formData.package}
                        onValueChange={(value) => handleSelectChange('package', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent>
                          {packages.map((pkg) => (
                            <SelectItem key={pkg} value={pkg}>
                              {pkg}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Preferred Trip Date <Asterisk className="inline h-3 w-3 text-red-500" />
                      </label>
                      <Input
                        name="tripDate"
                        type="date"
                        value={formData.tripDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Number of Divers
                    </label>
                    <Input
                      name="divers"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.divers}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Diving Experience */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Diving Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Certification Level <Asterisk className="inline h-3 w-3 text-red-500" />
                      </label>
                      <Select
                        value={formData.certification}
                        onValueChange={(value) => handleSelectChange('certification', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select certification" />
                        </SelectTrigger>
                        <SelectContent>
                          {certificationLevels.map((cert) => (
                            <SelectItem key={cert} value={cert}>
                              {cert}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Number of Logged Dives
                      </label>
                      <Input
                        name="diveExperience"
                        value={formData.diveExperience}
                        onChange={handleInputChange}
                        placeholder="e.g., 50"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="nitrox"
                        checked={formData.nitrox}
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300"
                      />
                      <span>Nitrox Required</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="equipment"
                        checked={formData.equipment}
                        onChange={handleCheckboxChange}
                        className="rounded border-gray-300"
                      />
                      <span>Equipment Rental Required</span>
                    </label>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Additional Information</h3>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Special Requests or Questions
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any dietary requirements, special requests, or questions?"
                      className="h-32"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={!isFormValid()}>
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Important Notes:</h3>
            <ul className="space-y-2 text-sm">
              <li>• Advanced Open Water certification or equivalent is required for Sipadan diving</li>
              <li>• Minimum 20 logged dives required</li>
              <li>• Valid diving insurance (DAN or equivalent) is mandatory</li>
              <li>• 50% deposit required to confirm booking</li>
              <li>• Please read our cancellation policy before booking</li>
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}