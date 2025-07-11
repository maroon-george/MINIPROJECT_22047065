'use client';

import { useEffect, useState} from 'react';

interface Student {
    name: string;
    email: string;
}

export default function StudentPage(){
    const [students, setStudents] = useState<Student[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/students")
        .then(res => res.json())
        .then(setStudents); 
    }, []);

    const addStudent = async () => {
    
        await fetch("http://localhost:8080/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        });
    setName(""); setEmail("");
    const res = await fetch("http://localhost:8080/students");
    setStudents(await res.json());
        };

    return (
        <div className="min-h-screen bg-[#2C2C2C] p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-[#A8DADC] mb-4">Student Management</h1>
                    <p className="text-[#B39CD0] text-lg">Add and manage student information</p>
                </div>

                {/* Add Student Form */}
                <div className="bg-[#3A3A3A] rounded-lg p-6 mb-8 shadow-lg">
                    <h2 className="text-2xl font-semibold text-[#A8DADC] mb-4">Add New Student</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input 
                            placeholder="Student Name" 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            className="px-4 py-3 bg-[#4A4A4A] border border-[#5A5A5A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                        />
                        <input 
                            placeholder="Student Email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                            className="px-4 py-3 bg-[#4A4A4A] border border-[#5A5A5A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                        />
                    </div>
                    <button 
                        onClick={addStudent}
                        className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        Add Student
                    </button>
                </div>

                {/* Students List */}
                <div className="bg-[#3A3A3A] rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold text-[#A8DADC] mb-6">Student List</h2>
                    {students.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-[#B39CD0] text-lg">No students found. Add your first student above!</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {students.map((student, i) => (
                                <div 
                                    key={i} 
                                    className="bg-[#4A4A4A] rounded-lg p-4 border-l-4 border-blue-400 hover:bg-[#5A5A5A] transition-all duration-200"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-[#A8DADC] font-semibold text-lg">{student.name}</h3>
                                            <p className="text-[#B39CD0]">{student.email}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                                                Student #{i + 1}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-8">
                    <a 
                        href="/" 
                        className="inline-flex items-center text-[#B39CD0] hover:text-[#A8DADC] transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}

    
