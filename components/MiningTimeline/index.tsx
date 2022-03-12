import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import FitbitIcon from "@mui/icons-material/Fitbit";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Typography from "@mui/material/Typography";
import type {} from "@mui/lab/themeAugmentation";

interface params {
  isMining: boolean;
  isMined: boolean;
}

export default function MiningTimeline({ isMining, isMined }: params) {
  // let color = isMining ? "text/"
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="primary">
            <FitbitIcon color="secondary" />
          </TimelineDot>
          <TimelineConnector
            sx={{ bgcolor: isMining ? "secondary.main" : "text.primary" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Wave
          </Typography>
          <Typography>Initiate a new wave</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector
            sx={{ bgcolor: isMining ? "secondary.main" : "text.primary" }}
          />
          <TimelineDot color="primary">
            <ViewInArIcon
              sx={{ color: isMining ? "secondary.main" : "text.main" }}
            />
          </TimelineDot>
          <TimelineConnector
            sx={{ bgcolor: isMining ? "secondary.main" : "text.primary" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Mining
          </Typography>
          <Typography>Adding to the BlockChain!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector
            sx={{ bgcolor: isMined ? "accent.main" : "text.primary" }}
          />
          <TimelineDot color="primary" variant="outlined">
            <AssuredWorkloadIcon
              sx={{ color: isMined ? "accent.main" : "text.main" }}
            />
          </TimelineDot>
          <TimelineConnector
            sx={{ bgcolor: isMined ? "accent.main" : "text.primary" }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Mined!
          </Typography>
          <Typography>Your wave is on the BlockChain!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
