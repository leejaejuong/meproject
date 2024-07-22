package com.example.demo.dto.debate;

import lombok.*;

@Getter @Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor @Builder
public class DebateinpoDTO {
   private Long debateId;
   private String memDebPost;
   private String meetingId;
   private String debateType;
   private String title;
   private String outLine;
   private String groupStartDate;
   private String groupEndDate;
   private String debateStartDate;
   private String debateEndDate;
}
