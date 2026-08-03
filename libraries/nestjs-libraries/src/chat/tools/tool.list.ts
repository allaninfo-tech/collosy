import { IntegrationValidationTool } from '@collosy/nestjs-libraries/chat/tools/integration.validation.tool';
import { IntegrationTriggerTool } from '@collosy/nestjs-libraries/chat/tools/integration.trigger.tool';
import { IntegrationSchedulePostTool } from './integration.schedule.post';
import { GenerateVideoOptionsTool } from '@collosy/nestjs-libraries/chat/tools/generate.video.options.tool';
import { VideoFunctionTool } from '@collosy/nestjs-libraries/chat/tools/video.function.tool';
import { GenerateVideoTool } from '@collosy/nestjs-libraries/chat/tools/generate.video.tool';
import { GenerateImageTool } from '@collosy/nestjs-libraries/chat/tools/generate.image.tool';
import { IntegrationListTool } from '@collosy/nestjs-libraries/chat/tools/integration.list.tool';
import { GroupListTool } from '@collosy/nestjs-libraries/chat/tools/group.list.tool';
import { UploadFromUrlTool } from '@collosy/nestjs-libraries/chat/tools/upload.from.url.tool';

export const toolList = [
  IntegrationListTool,
  GroupListTool,
  IntegrationValidationTool,
  IntegrationTriggerTool,
  IntegrationSchedulePostTool,
  GenerateVideoOptionsTool,
  VideoFunctionTool,
  GenerateVideoTool,
  GenerateImageTool,
  UploadFromUrlTool,
];
