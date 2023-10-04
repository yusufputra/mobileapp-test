import create from 'zustand';

type CommentType = {
  id: number;
  picProfileUri: string;
  name: string;
  comment: string;
};

type ContentType = {
  id: number;
  picProfileUri: string;
  name: string;
  datePost: string;
  contentText: string;
  picContentUri: string;
  totalDownVote: number;
  totalUpVote: number;
  comments: Array<CommentType>;
};

type FeedContentType = {
  feedContent: Array<ContentType>;
  setUpvote: (index: number) => void;
  setDownVote: (index: number) => void;
  addComment: (id: number, name: string, comment: string) => void;
};

const useFeedContent = create<FeedContentType>((set, get) => ({
  feedContent: [
    {
      id: 0,
      picProfileUri: 'https://picsum.photos/200',
      name: 'Usup Suparma',
      datePost: 'Mar 27, 2023',
      contentText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaluctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      picContentUri: 'https://picsum.photos/200',
      totalDownVote: 0,
      totalUpVote: 0,
      comments: [
        {
          id: 0,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
        {
          id: 1,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
        {
          id: 2,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
      ],
    },
    {
      id: 1,
      picProfileUri: 'https://picsum.photos/200',
      name: 'Usup Suparma',
      datePost: 'Mar 27, 2023',
      contentText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaluctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      picContentUri: 'https://picsum.photos/200',
      totalDownVote: 0,
      totalUpVote: 0,
      comments: [
        {
          id: 0,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
        {
          id: 1,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
        {
          id: 2,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
      ],
    },
    {
      id: 2,
      picProfileUri: 'https://picsum.photos/200',
      name: 'Usup Suparma',
      datePost: 'Mar 27, 2023',
      contentText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullaluctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
      picContentUri: 'https://picsum.photos/200',
      totalDownVote: 0,
      totalUpVote: 0,
      comments: [
        {
          id: 0,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
        {
          id: 1,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
        {
          id: 2,
          picProfileUri: 'https://picsum.photos/200',
          name: 'Usup Suparma',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci,',
        },
      ],
    },
  ],
  setDownVote: id => {
    const contents = get().feedContent;
    const index = contents.findIndex(item => item.id === id);
    const content = contents[index];
    delete contents[index];
    const payload = [
      {...content, totalDownVote: content.totalDownVote + 1},
      ...contents,
    ];
    set({
      feedContent: payload.sort((a, b) => a.id - b.id),
    });
  },
  setUpvote: id => {
    const contents = get().feedContent;
    const index = contents.findIndex(item => item.id === id);
    const content = contents[index];
    delete contents[index];
    const payload = [
      ...contents,
      {...content, totalUpVote: content.totalUpVote + 1},
    ];
    set({
      feedContent: payload.sort((a, b) => a.id - b.id),
    });
  },
  addComment: (id, name, comment) => {
    const contents = get().feedContent;
    const index = contents.findIndex(item => item.id === id);
    const content = contents[index];
    delete contents[index];
    const payload = [
      ...contents,
      {
        ...content,
        comments: [
          ...content.comments,
          {
            id: content.comments.length + 1,
            picProfileUri: 'https://picsum.photos/200',
            name,
            comment,
          },
        ],
      },
    ];
    set({
      feedContent: payload.sort((a, b) => a.id - b.id),
    });
  },
}));

export {useFeedContent};
export type {ContentType, CommentType};
