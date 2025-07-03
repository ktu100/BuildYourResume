"use client";

import { Input } from "./Inputs";
import { RatingInput } from "./ResumeSection";
import { Plus, Trash2 } from "lucide-react";

// AdditionalInfoForm Component
export const AdditionalInfoForm = ({ languages, interests, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-black to-amber-50'>
      <h2 className='text-2xl font-black text-slate-900 mb-8'>Additional Information</h2>

      {/* Languages Section */}
      <div className="mb-10">
        <h3 className='text-lg font-bold text-slate-800 mb-6 flex items-center gap-2'>
          <div className='w-2 h-2 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full'></div>
          Languages
        </h3>
        <div className="space-y-6">
          {languages?.map((lang, index) => (
            <div key={index} className='relative bg-white border border-amber-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <Input
                  label="Language"
                  placeholder="e.g. English"
                  value={lang.name || ""}
                  onChange={({ target }) => updateArrayItem("languages", index, "name", target.value)}
                />
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-4">Proficiency</label>
                  <RatingInput
                    value={lang.progress || 0}
                    total={5}
                    color="#8b5cf6"
                    bgColor="#e2e8f0"
                    onChange={(value) => updateArrayItem("languages", index, "progress", value)}
                  />
                </div>
              </div>
              {languages.length > 1 && (
                <button
                  type="button"
                  className={commonStyles.trashButton}
                  onClick={() => removeArrayItem("languages", index)}
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className={`flex items-center gap-3 px-6 py-3 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-amber-500 to-red-500`}
            onClick={() => addArrayItem("languages", { name: "", progress: 0 })}
          >
            <Plus size={16} /> Add Language
          </button>
        </div>
      </div>

      {/* Interests Section */}
      <div className="mb-6">
        <h3 className='text-lg font-bold text-slate-800 mb-6 flex items-center gap-2'>
          <div className='w-2 h-2 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full'></div>
          Interests
        </h3>
        <div className="space-y-4">
          {interests?.map((interest, index) => (
            <div key={index} className='relative'>
              <Input
                placeholder="e.g. Reading, Photography"
                value={interest || ""}
                onChange={({ target }) => updateArrayItem("interests", index, null, target.value)}
              />
              {interests.length > 1 && (
                <button
                  type="button"
                  className='absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all'
                  onClick={() => removeArrayItem("interests", index)}
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className={`flex items-center gap-3 px-6 py-3 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-orange-500 to-emerald-500`}
            onClick={() => addArrayItem("interests", "")}
          >
            <Plus size={16} /> Add Interest
          </button>
        </div>
      </div>
    </div>
  );
};

// CertificationInfoForm Component
export const CertificationInfoForm = ({ certifications, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-black to-emerald-50'>
      <h2 className='text-2xl font-black text-slate-900 mb-8'>Certifications</h2>
      <div className="space-y-6 mb-6">
        {certifications.map((cert, index) => (
          <div key={index} className='relative bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Certificate Title"
                placeholder="Full Stack Web Developer"
                value={cert.title || ""}
                onChange={({ target }) => updateArrayItem(index, "title", target.value)}
              />

              <Input
                label="Issuer"
                placeholder="Coursera / Google / etc."
                value={cert.issuer || ""}
                onChange={({ target }) => updateArrayItem(index, "issuer", target.value)}
              />

              <Input
                label="Year"
                placeholder="2024"
                value={cert.year || ""}
                onChange={({ target }) => updateArrayItem(index, "year", target.value)}
              />
            </div>

            {certifications.length > 1 && (
              <button
                type="button"
                className={commonStyles.trashButton}
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`flex items-center gap-3 px-6 py-3 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-emerald-500 to-red-500`}
          onClick={() =>
            addArrayItem({
              title: "",
              issuer: "",
              year: "",
            })
          }
        >
          <Plus size={16} />
          Add Certification
        </button>
      </div>
    </div>
  );
};

// ContactInfoForm Component
export const ContactInfoForm = ({ contactInfo, updateSection }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-black to-emerald-50'>
      <h2 className='text-2xl font-black text-gray-900 mb-8'>Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Input
            label="Address"
            placeholder="Short Address"
            value={contactInfo.location || ""}
            onChange={({ target }) => updateSection("location", target.value)}
          />
        </div>

        <Input
          label="Email"
          placeholder="john@example.com"
          type="email"
          value={contactInfo.email || ""}
          onChange={({ target }) => updateSection("email", target.value)}
        />

        <Input
          label="Phone Number"
          placeholder="1234567890"
          value={contactInfo.phone || ""}
          onChange={({ target }) => updateSection("phone", target.value)}
        />

        <Input
          label="LinkedIn"
          placeholder="https://linkedin.com/in/username"
          value={contactInfo.linkedin || ""}
          onChange={({ target }) => updateSection("linkedin", target.value)}
        />

        <Input
          label="GitHub"
          placeholder="https://github.com/username"
          value={contactInfo.github || ""}
          onChange={({ target }) => updateSection("github", target.value)}
        />

        <div className="md:col-span-2">
          <Input
            label="Portfolio / Website"
            placeholder="https://yourwebsite.com"
            value={contactInfo.website || ""}
            onChange={({ target }) => updateSection("website", target.value)}
          />
        </div>
      </div>
    </div>
  );
};

// EducationDetailsForm Component
export const EducationDetailsForm = ({ educationInfo, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-black to-indigo-50'>
      <h2 className='text-2xl font-black text-slate-900 mb-8'>Education</h2>
      <div className="space-y-6 mb-6">
        {educationInfo.map((education, index) => (
          <div key={index} className='relative bg-white border border-indigo-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Degree"
                placeholder="BTech in Computer Science"
                value={education.degree || ""}
                onChange={({ target }) => updateArrayItem(index, "degree", target.value)}
              />

              <Input
                label="Institution"
                placeholder="XYZ University"
                value={education.institution || ""}
                onChange={({ target }) => updateArrayItem(index, "institution", target.value)}
              />

              <Input
                label="Start Date"
                type="month"
                value={education.startDate || ""}
                onChange={({ target }) => updateArrayItem(index, "startDate", target.value)}
              />

              <Input
                label="End Date"
                type="month"
                value={education.endDate || ""}
                onChange={({ target }) => updateArrayItem(index, "endDate", target.value)}
              />
            </div>
            {educationInfo.length > 1 && (
              <button
                type="button"
                className='absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all'
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`flex items-center gap-3 px-6 py-3 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-amber-500 to-emerald-500`}
          onClick={() =>
            addArrayItem({
              degree: "",
              institution: "",
              startDate: "",
              endDate: "",
            })
          }
        >
          <Plus size={16} /> Add Education
        </button>
      </div>
    </div>
  );
};

// ProfileInfoForm Component
export const ProfileInfoForm = ({ profileData, updateSection }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-white to-pink-50'>
      <h2 className='text-2xl font-black text-slate-900 mb-8'>Personal Information</h2>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="John Doe"
            value={profileData.fullName || ""}
            onChange={({ target }) => updateSection("fullName", target.value)}
          />

          <Input
            label="Designation"
            placeholder="Full Stack Developer"
            value={profileData.designation || ""}
            onChange={({ target }) => updateSection("designation", target.value)}
          />

          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-slate-700 mb-3">Summary</label>
            <textarea
              className='w-full p-4 bg-white border border-pink-200 rounded-xl focus:border-rose-400 focus:ring-4 focus:ring-rose-50 transition-all outline-none resize-none'
              rows={4}
              placeholder="Short introduction about yourself"
              value={profileData.summary || ""}
              onChange={({ target }) => updateSection("summary", target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ProjectDetailForm Component
export const ProjectDetailForm = ({ projectInfo, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-white to-cyan-50'>
      <h2 className='text-2xl font-black text-slate-900 mb-8'>Projects</h2>
      <div className="space-y-6 mb-6">
        {projectInfo.map((project, index) => (
          <div key={index} className='relative bg-white border border-teal-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Input
                  label="Project Title"
                  placeholder="Portfolio Website"
                  value={project.title || ""}
                  onChange={({ target }) => updateArrayItem(index, "title", target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-3">Description</label>
                <textarea
                  placeholder="Short description about the project"
                  className='w-full p-4 bg-white border border-cyan-200 rounded-xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 transition-all outline-none resize-none'
                  rows={3}
                  value={project.description || ""}
                  onChange={({ target }) => updateArrayItem(index, "description", target.value)}
                />
              </div>

              <Input
                label="GitHub Link"
                placeholder="https://github.com/username/project"
                value={project.github || ""}
                onChange={({ target }) => updateArrayItem(index, "github", target.value)}
              />

              <Input
                label="Live Demo URL"
                placeholder="https://yourproject.live"
                value={project.liveDemo || ""}
                onChange={({ target }) => updateArrayItem(index, "liveDemo", target.value)}
              />
            </div>

            {projectInfo.length > 1 && (
              <button
                type="button"
                className='absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all'
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`flex items-center gap-3 px-6 py-3 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-amber-500 to-emerald-500`}
          onClick={() =>
            addArrayItem({
              title: "",
              description: "",
              github: "",
              liveDemo: "",
            })
          }
        >
          <Plus size={16} />
          Add Project
        </button>
      </div>
    </div>
  );
};

// SkillsInfoForm Component
export const SkillsInfoForm = ({ skillsInfo, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-white to-amber-50'>
      <h2 className='text-2xl font-black text-slate-900 mb-8'>Skills</h2>
      <div className="space-y-6 mb-6">
        {skillsInfo.map((skill, index) => (
          <div key={index} className='relative bg-white border border-amber-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Skill Name"
                placeholder="JavaScript"
                value={skill.name || ""}
                onChange={({ target }) => updateArrayItem(index, "name", target.value)}
              />

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Proficiency ({skill.progress ? Math.round(skill.progress / 20) : 0}/5)
                </label>
                <div className="mt-2">
                  <RatingInput
                    value={skill.progress || 0}
                    total={5}
                    color="#f59e0b"
                    bgColor="#e2e8f0"
                    onChange={(newValue) => updateArrayItem(index, "progress", newValue)}
                  />
                </div>
              </div>
            </div>

            {skillsInfo.length > 1 && (
              <button
                type="button"
                className='absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all'
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`flex items-center gap-3 px-6 py-3 text-black font-bold rounded-xl hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-amber-500 to-emerald-500`}
          onClick={() =>
            addArrayItem({
              name: "",
              progress: 0,
            })
          }
        >
          <Plus size={16} /> Add Skill
        </button>
      </div>
    </div>
  );
};

// WorkExperienceForm Component
export const WorkExperienceForm = ({ workExperience, updateArrayItem, addArrayItem, removeArrayItem }) => {
  return (
    <div className='p-8 bg-gradient-to-br from-white to-emerald-50'>
      <h2 className='text-2xl font-black text-slate-900 mb-8'>Work Experience</h2>
      <div className="space-y-6 mb-6">
        {workExperience.map((experience, index) => (
          <div key={index} className='relative bg-white border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company"
                placeholder="ABC Corp"
                value={experience.company || ""}
                onChange={({ target }) => updateArrayItem(index, "company", target.value)}
              />

              <Input
                label="Role"
                placeholder="Frontend Developer"
                value={experience.role || ""}
                onChange={({ target }) => updateArrayItem(index, "role", target.value)}
              />

              <Input
                label="Start Date"
                type="month"
                value={experience.startDate || ""}
                onChange={({ target }) => updateArrayItem(index, "startDate", target.value)}
              />

              <Input
                label="End Date"
                type="month"
                value={experience.endDate || ""}
                onChange={({ target }) => updateArrayItem(index, "endDate", target.value)}
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-bold text-slate-700 mb-3">Description</label>
              <textarea
                placeholder="What did you do in this role?"
                className='w-full p-4 bg-white border border-green-200 rounded-xl focus:border-amber-400 focus:ring-4 focus:ring-emerald-50 transition-all outline-none resize-none'
                rows={3}
                value={experience.description || ""}
                onChange={({ target }) => updateArrayItem(index, "description", target.value)}
              />
            </div>

            {workExperience.length > 1 && (
              <button
                type="button"
                className='absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all'
                onClick={() => removeArrayItem(index)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className={`flex items-center gap-3 px-6 py-3 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg bg-gradient-to-r from-amber-500 to-emerald-500`}
          onClick={() =>
            addArrayItem({
              company: "",
              role: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
        >
          <Plus size={16} />
          Add Work Experience
        </button>
      </div>
    </div>
  );
};