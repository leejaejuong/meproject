package com.example.demo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/member")
public class debateController {
    @GetMapping("debatemake")
    public String debatemake(){
        return "debatepage/debateinpo/debatemake";
    }
    @GetMapping ("/join")
    public String join(){
        return "member/join";
    }
}
