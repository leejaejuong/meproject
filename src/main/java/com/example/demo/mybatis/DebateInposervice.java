package com.example.demo.mybatis;

import com.example.demo.dto.debate.DebateinpoDTO;
import com.example.demo.mapper.DebateInpoMapper;
import com.example.demo.dto.debate.DebateinpoDTO;
import com.example.demo.mapper.DebateInpoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class DebateInposervice {
    private final DebateInpoMapper debateInpoMapper;

    public void addBoard(DebateinpoDTO debateinpoDTO) {
        debateInpoMapper.insertdebateinpo(debateinpoDTO);
    }
}
