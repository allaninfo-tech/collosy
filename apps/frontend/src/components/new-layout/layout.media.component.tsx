'use client';

import { MediaBox } from '@collosy/frontend/components/media/media.component';

export const MediaLayoutComponent = () => {
  return (
    <div className="bg-newBgColorInner p-[20px] flex flex-1 flex-col gap-[15px] transition-all min-h-[calc(100vh-140px)]">
      <MediaBox setMedia={() => {}} closeModal={() => {}} standalone={true} />
    </div>
  );
};
