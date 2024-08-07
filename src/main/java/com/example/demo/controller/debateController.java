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

    @GetMapping("/debateoutline")
    public String debateoutline(HttpSession session) {
        System.out.println("토론정보창");
        System.out.println(session.getAttribute("meetingId"));
        System.out.println(session.getAttribute("debateType"));
        return "debatepage/debateinpo/debateoutline";
    }

    @GetMapping("/debatemake")
    public String debatemake() {
        return "debatepage/debateinpo/debatemake";
    }

    @PostMapping("/debatemake")
    public String debatemake(Long meetingId, HttpSession session) {
        //선택한값을 meetingID 에 가져와 session 에 저장한다
        if(meetingId==1 || meetingId==2) {
            session.setAttribute("meetingId", meetingId);
            return "/debatepage/debateinpo/debatetype";
        }else{
            session.setAttribute("meetingId", meetingId);
            session.setAttribute("debateType", 4);

            return "/debatepage/debateinpo/debateoutline";
        }


    }

    @GetMapping("/debatetype")
    public String debatetype() {
        return "debatepage/debateinpo/debatetype";
    }
    @PostMapping("/debatetype")
    public String debatetype( Long debateType,HttpSession session) {
        //선택한값을 debateType 에 가져와 session 에 저장한다

        return "/debatepage/debateinpo/debateoutline";
    }


    @PostMapping("/debateoutline")
    public String debateoutline() {
        return "debatepage/debateinpo/debateoutline";
    }

    @GetMapping("/debateboard")
    public String debateboard() {
        return "debatepage/debateboard/debateboard";
    }

    @GetMapping("/")
    public String mainpage() {
        return "mainpage/mainpage";
    }
    @GetMapping("/postmain")
    public String postmain() {
        return "debatepage/debateboard/postmain";
    }
    @GetMapping("/searchdetail")
    public String searchdetail() {
        return "search/searchdetail";
    }
    @GetMapping("/search")
    public String search() {
        return "search/search";
    }
    @GetMapping("/join")
    public String join() {
        return "login/join";
    }
    @GetMapping("/debatewrite")
    public String debatewrite() {
        return "debatepage/debateboard/debatewrite";
    }
    @GetMapping("/debatemain")
    public String debatemain() {
        return "debatepage/debateboard/debatemain";
    }

}
