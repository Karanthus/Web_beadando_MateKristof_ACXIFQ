package com.mypage.demo.controller;

import com.mypage.demo.model.Message;
import com.mypage.demo.repository.MessageRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessageController {
    private final MessageRepository repository;

    public MessageController(MessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/api/message")
    public List<Message> getMessage() {
        return repository.findAll();
    }
}
