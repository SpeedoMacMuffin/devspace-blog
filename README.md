## Static Next.js blog using Markdown for posts, with pagination, categories and search and Tailwind CSS for styling

## Stack
- Next.js
- Tailwind CSS

## Usage
Install Dependencies
```
npm install
```

Run Dev Server
```
npm run dev
```

## Creating Posts
- Create Markdown-File in the "posts" folder
- Add the frontmatter/fields at the top and then the post body. Examples can be found in the "posts" folder
- Add an image and author image in the public/images folder
- For category color coding, edit the "Components/CategoryLabel.js" file

## Caching
Husky is used to run a cache script on git commit. Caching is used for the search api route/serverless function
