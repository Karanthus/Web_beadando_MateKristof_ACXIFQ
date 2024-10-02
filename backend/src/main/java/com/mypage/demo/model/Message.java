package com.mypage.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public record Message (
        @Id Long id,
        String content
) {}
