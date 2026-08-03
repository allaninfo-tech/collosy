'use client';

import {
  PostComment,
  withProvider,
} from '@collosy/frontend/components/new-launch/providers/high.order.provider';
import { Checkbox } from '@collosy/react/form/checkbox';
import { Input } from '@collosy/react/form/input';
import { useT } from '@collosy/react/translation/get.transation.service.client';
import { useSettings } from '@collosy/frontend/components/launches/helpers/use.values';
import { LinkedinDto } from '@collosy/nestjs-libraries/dtos/posts/providers-settings/linkedin.dto';
import { LinkedinPreview } from '@collosy/frontend/components/new-launch/providers/linkedin/linkedin.preview';

const LinkedInSettings = () => {
  const t = useT();
  const { watch, register, formState, control } = useSettings();
  const isCarousel = watch('post_as_images_carousel');

  return (
    <div className="mb-[20px]">
      <Checkbox
        variant="hollow"
        label={t('post_as_images_carousel', 'Post as images carousel')}
        {...register('post_as_images_carousel', {
          value: false,
        })}
      />
      {isCarousel && (
        <div className="mt-[10px]">
          <Input
            label={t('carousel_name', 'Carousel slide name')}
            placeholder="slides"
            {...register('carousel_name')}
          />
        </div>
      )}
    </div>
  );
};
export default withProvider<LinkedinDto>({
  postComment: PostComment.COMMENT,
  minimumCharacters: [],
  SettingsComponent: LinkedInSettings,
  CustomPreviewComponent: LinkedinPreview,
  dto: LinkedinDto,
  maximumCharacters: 3000,
});
