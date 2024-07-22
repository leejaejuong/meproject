package com.example.demo.mapper;

import com.example.demo.dto.debate.DebateinpoDTO;
import com.example.demo.dto.debate.DebateinpoDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface DebateInpoMapper {
    void insertdebateinpo(DebateinpoDTO debateinpo);
    List<DebateinpoDTO> selectdebateinpo(@Param("debatedId") Long debateId);
}
