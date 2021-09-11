/****** Object:  Table [dbo].[discussion]    Committed by VersionSQL https://www.versionsql.com ******/

SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
CREATE TABLE [dbo].[discussion](
	[commentID] [int] NOT NULL,
	[userID] [int] NULL,
	[paperID] [int] NULL,
	[answerFlag] [varchar](1) NULL,
	[content] [varchar](255) NULL,
	[replyCommentID] [int] NULL,
	[upvotes] [int] NULL,
	[downvotes] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[commentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]