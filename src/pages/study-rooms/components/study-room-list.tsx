import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { useContext } from 'react';

import { DialogContext } from './dialog-provider';
import StudyRoom from './study-room-list-item';

type ItemsType = {
  id: number;
  title: string;
  count: string;
};
const items: ItemsType[] = [
  { id: 0, title: '뽀모도로 할 사람', count: '1' },
  { id: 1, title: '뽀모도로 할 사람', count: '1' },
  { id: 2, title: '뽀모도로 할 사람', count: '2' },
  { id: 3, title: '뽀모도로 할 사람', count: '1' },
  { id: 4, title: '뽀모도로 할 사람', count: '7' },
  { id: 5, title: '뽀모도로 할 사람', count: '6' },
  { id: 6, title: '뽀모도로 할 사람', count: '5' },
  { id: 7, title: '뽀모도로 할 사람', count: '4' },
  { id: 8, title: '뽀모도로 할 사람', count: '3' },
  { id: 9, title: '뽀모도로 할 사람', count: '10' },
  { id: 10, title: '뽀모도로 할 사람', count: '10' },
];
const StudyRoomList = () => {
  const { handleDialog } = useContext(DialogContext);
  return (
    <div style={{ width: '100%' }}>
      <Card>
        <CardHeader title="스터디 룸 목록" />
        <CardContent>
          <Button variant="outlined" onClick={handleDialog}>
            스터디룸 생성
          </Button>
          <ul>
            {items.map((item) => (
              <StudyRoom {...item} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyRoomList;
