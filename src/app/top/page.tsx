import { useEffect, useState } from 'react';
import useRecords from '@/hooks/useRecords';
import { Record } from '@/interfaces/Record';

export default function TopPage() {
  const { startLoadRecords } = useRecords();
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    startLoadRecords().then((records) => setRecords(records));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {records.map((record, idx) => {
        return (
          <div
            key={record.id}
            className={`flex gap-2 p-2 border border-primary rounded-md ${idx === 0 ? 'text-xl' : ''}`}
          >
            <div className='font-bold text-primary'>#{idx + 1}</div>
            <div className="">{record.name}</div>
            <div className="flex-1"></div>
            <div>{record.score} 🏆</div>
          </div>
        );
      })}
    </div>
  );
}
