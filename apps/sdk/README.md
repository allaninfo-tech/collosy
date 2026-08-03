# Collosy NodeJS SDK

This is the NodeJS SDK for [Collosy](https://collosy.com).

You can start by installing the package:

```bash
npm install @collosy/node
```

## Usage
```typescript
import Collosy from '@collosy/node';
const collosy = new Collosy('your api key', 'your self-hosted instance (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post to Collosy
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to Collosy
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl, check the [Collosy API documentation](https://docs.collosy.com/public-api) for more information.