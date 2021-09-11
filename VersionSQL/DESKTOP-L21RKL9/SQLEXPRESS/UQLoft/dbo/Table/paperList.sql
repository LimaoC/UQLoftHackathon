/****** Object:  Table [dbo].[paperList]    Committed by VersionSQL https://www.versionsql.com ******/

SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[paperList](
	[paperID] [int] NOT NULL,
	[paperName] [varchar](255) NULL,
	[courseCode] [varchar](8) NULL,
	[pdfFile] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[paperID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]