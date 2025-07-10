package com.gwork.student_management.controller;


import com.gwork.student_management.model.Student;
import com.gwork.student_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from frontend (React/Next.js)
public class StudentController {

    @Autowired
    private StudentRepository repo;

    // GET /students → returns all students
    @GetMapping
    public List<Student> getAll() {
        return repo.findAll();
    }

    // POST /students → adds a new student
    @PostMapping
    public Student add(@RequestBody Student student) {
        return repo.save(student);
    }
}