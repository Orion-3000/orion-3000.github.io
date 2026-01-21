import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoverLetter = () => {
  const navigate = useNavigate();

  const letter = `Dear Mr. Chen,
  
Thank you for taking the time to read through this portfolio.

I would like to take this opportunity to give you an overview of what you are about to engage with. This digital portfolio showcases my academic, personal, and extracurricular achievements, highlighting my growth and development to date. The information contained throughout this portfolio is meant to give you insight into who I am, what I value, and the experiences that have helped shape me into the person I am becoming.

In the first section of this portfolio, you will find my education information. I discuss the courses, programs, and opportunities I have taken part in during my time as a student at Unionville High School. Through these experiences, I have developed strong interests in areas such as technology, problem-solving, and critical thinking. Being involved in different subjects and clubs has helped me better understand my strengths and the direction I want to take in the future.

Next, I outline my volunteer and work-related experiences. Through working with others in different environments, I have learned the importance of responsibility, teamwork, and continuous learning. These experiences have helped me grow both personally and academically, while also teaching me how to adapt and contribute in real-world situations.

Following this, I highlight my extracurricular involvement. Participating in clubs and activities outside the classroom has allowed me to explore my interests further and challenge myself in new ways. These opportunities have played a big role in building my confidence, leadership skills, and time management abilities. Finally, I include any additional certifications, skills, or accomplishments that further reflect my growth and interests.

Thank you again for taking the time to review both this letter and my portfolio as a whole. This is a project I am very proud of, and I appreciate the opportunity to reflect on my progress and future goals. I look forward to continuing to learn and grow through future opportunities.
`;

  return (
    <div className="min-h-screen p-12 bg-white text-black flex items-start">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <button onClick={() => navigate(-1)} className="px-3 py-1 bg-gray-100 rounded">Back</button>
        </div>

        <div className="p-6 border rounded bg-white" style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '11pt', color: '#000' }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem', lineHeight: 1 }}>
            <div>Michael Luo</div>
            <div>52 Holbrook Court</div>
            <div>(647)-923-3995	 orion30002022@gmail.com</div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div>Mr. Chen</div>
            <div>Careers Teacher</div>
            <div>Unionville High School</div>
            <div>Markham, ON</div>
            <div>Canada</div>
          </div>

          <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.45 }}>
            {letter.split('\n\n').map((para, i) => (
              <p key={i} style={{ margin: '0 0 1rem 0', fontFamily: 'Times New Roman, Times, serif', fontSize: '11pt' }}>{para}</p>
            ))}
          </div>

          <div style={{ marginTop: '1.25rem' }}>
            <div>Sincerely,</div>
            <div>Michael</div>
            <div style={{ fontFamily: '"Alex Brush", cursive', fontSize: '19pt', marginTop: '0.4rem' }}>M. Luo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
