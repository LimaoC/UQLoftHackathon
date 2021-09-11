/****** Object:  Table [dbo].[answers]    Committed by VersionSQL https://www.versionsql.com ******/

SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[answers](
	[questionID] [int] NOT NULL,
	[paperID] [int] NULL,
	[courseName] [varchar](8) NULL,
	[aTally] [int] NULL,
	[bTally] [int] NULL,
	[cTally] [int] NULL,
	[dTally] [int] NULL,
	[eTally] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[questionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]