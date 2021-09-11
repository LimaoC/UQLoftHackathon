/****** Object:  Table [dbo].[courses]    Committed by VersionSQL https://www.versionsql.com ******/

SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[courses](
	[courseCode] [varchar](8) NOT NULL,
	[courseName] [varchar](255) NULL,
	[ECP] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[courseCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]