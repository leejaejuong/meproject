package com.example.demo.controller;

import com.example.demo.service.DebateInposervice;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/member")
public class debateController {
    private final DebateInposervice debateInposervice;

    @GetMapping("/debateboard")
    public String debateboard() {
        return "debatepage/debateboard/debateboard";
    }

    @GetMapping("/debateoutline")
    public String debateoutline(HttpSession session) {
        System.out.println("토론정보창");
        System.out.println(session.getAttribute("meetingId"));
        System.out.println(session.getAttribute("debateType"));
        return "debatepage/debateinpo/debateoutline";
    }


    @PostMapping("/debatemake")
    public String debatemake(Long meetingId, HttpSession session) {
        //선택한값을 meetingID 에 가져와 session 에 저장한다
        session.setAttribute("meetingId", meetingId);
        System.out.println(session.getAttribute("meetingId"));
        return "/debatepage/debateinpo/debatetype";
    }

    @GetMapping("/debatetype")
    public String debatetype() {
        return "debatepage/debateinpo/debatetype";
    }
    @PostMapping("/debatetype")
    public String debatetype( Long debateType,HttpSession session) {
        //선택한값을 debateType 에 가져와 session 에 저장한다
        System.out.println( ", memberId = " + debateType);
        session.setAttribute("debateType", debateType);
//       확인
        System.out.println(session.getAttribute("meetingId"));
        System.out.println(session.getAttribute("debateType"));
        return "/debatepage/debateinpo/debateoutline";
    }
    @GetMapping("/debatemake")
    public String debatemake() {
        return "debatepage/debateinpo/debatemake";
    }

    @PostMapping("/debateoutline")
    public String debateoutline() {
        return "debatepage/debateinpo/debateoutline";
    }

}
