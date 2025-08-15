# News Template Usage Guide

## Overview
This template provides a complete structure for creating news articles for Born International. The template is located at `/news/template/page.tsx` and can be used as a base for creating new news articles.

## How to Use the Template

### 1. Create a New News Article
To create a new news article, copy the template file and modify the `templateData` object:

```typescript
// Copy from: app/news/template/page.tsx
// Create new file: app/news/[article-id]/page.tsx

const templateData = {
  id: "your-article-id",
  date: "January 15, 2024",
  title: "Your Article Title",
  subtitle: "Your article subtitle (optional)",
  author: "Author Name",
  readTime: "5 min read",
  category: "Category Name",
  image: "/path/to/your/image.jpg",
  content: `
    <p>Your article content in HTML format...</p>
    <h2>Section Heading</h2>
    <p>More content...</p>
  `,
  tags: ["Tag1", "Tag2", "Tag3"],
  relatedArticles: [
    {
      id: "related-1",
      title: "Related Article Title",
      excerpt: "Brief description...",
      image: "/path/to/image.jpg",
      date: "January 10, 2024",
      category: "Category"
    }
  ]
}
```

### 2. Required Fields

#### Basic Information
- `id`: Unique identifier for the article (used in URL)
- `date`: Publication date
- `title`: Main article title
- `author`: Author name
- `readTime`: Estimated reading time
- `category`: Article category (e.g., "Company News", "Market Analysis")

#### Content
- `image`: Hero image path (recommended size: 1920x1080px)
- `content`: Article content in HTML format
- `subtitle`: Optional subtitle (can be empty string)

#### Metadata
- `tags`: Array of relevant tags
- `relatedArticles`: **Automatically generated** - no need to manually specify

### 3. Content Formatting

The `content` field accepts HTML and supports:
- `<p>` for paragraphs
- `<h2>`, `<h3>` for headings
- `<ul>`, `<li>` for lists
- `<blockquote>` for quotes
- `<strong>`, `<em>` for emphasis

#### Image Layouts Available:

**1. Single Large Image:**
```html
<div class="my-8">
  <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
    <img src="/path/to/image.jpg" alt="Description" class="w-full h-full object-cover" />
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Caption for the image</p>
</div>
```

**2. Two Column Images:**
```html
<div class="my-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="relative h-48 rounded-lg overflow-hidden">
      <img src="/path/to/image1.jpg" alt="Description 1" class="w-full h-full object-cover" />
    </div>
    <div class="relative h-48 rounded-lg overflow-hidden">
      <img src="/path/to/image2.jpg" alt="Description 2" class="w-full h-full object-cover" />
    </div>
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Caption for both images</p>
</div>
```

**3. Three Column Images:**
```html
<div class="my-8">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="relative h-40 rounded-lg overflow-hidden">
      <img src="/path/to/image1.jpg" alt="Description 1" class="w-full h-full object-cover" />
    </div>
    <div class="relative h-40 rounded-lg overflow-hidden">
      <img src="/path/to/image2.jpg" alt="Description 2" class="w-full h-full object-cover" />
    </div>
    <div class="relative h-40 rounded-lg overflow-hidden">
      <img src="/path/to/image3.jpg" alt="Description 3" class="w-full h-full object-cover" />
    </div>
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Caption for all three images</p>
</div>
```

**4. Image with Text Side by Side:**
```html
<div class="my-8">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
    <div class="relative h-64 rounded-lg overflow-hidden">
      <img src="/path/to/image.jpg" alt="Description" class="w-full h-full object-cover" />
    </div>
    <div>
      <h3 class="text-lg font-medium text-slate-900 mb-2">Title</h3>
      <p class="text-slate-600">Explanatory text about the image.</p>
    </div>
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Caption for the image</p>
</div>
```

**5. Full Width Image with Overlay Text:**
```html
<div class="my-8">
  <div class="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
    <img src="/path/to/image.jpg" alt="Description" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div class="text-center text-white">
        <h3 class="text-xl font-medium mb-2">Overlay Title</h3>
        <p class="text-sm">Overlay description text</p>
      </div>
    </div>
  </div>
  <p class="text-sm text-slate-500 mt-2 text-center">Caption for the image</p>
</div>
```

### 4. Image Requirements

#### Hero Image
- **Path**: Place in `/public/news/[date]/` folder
- **Size**: 1920x1080px recommended
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for fast loading

#### Related Article Images
- **Size**: 400x300px recommended
- **Format**: JPG or PNG
- **File size**: Keep under 200KB

### 5. File Structure

```
app/news/
├── template/
│   └── page.tsx          # Template file
├── [article-id]/
│   └── page.tsx          # Individual article
└── page.tsx              # News listing page

public/news/
├── 20250815/
│   ├── 1.jpg            # Article images
│   ├── 2.jpg
│   └── 3.jpg
└── [future-dates]/
    └── [images]
```

### 6. Example Article Creation

1. **Create folder**: `app/news/fourth-quarter-results/`
2. **Create file**: `app/news/fourth-quarter-results/page.tsx`
3. **Copy template**: Copy content from `template/page.tsx`
4. **Modify data**: Update `templateData` object
5. **Add images**: Place images in `/public/news/` folder
6. **Test**: Visit `/news/fourth-quarter-results`

### 7. SEO Considerations

- Use descriptive article IDs in URLs
- Include relevant keywords in titles and content
- Add proper alt text for images
- Use semantic HTML structure
- Include meta descriptions (can be added to template)

### 8. Responsive Design

The template is fully responsive and includes:
- Mobile-first design
- Responsive typography
- Adaptive image sizing
- Touch-friendly interactions

### 9. Performance Tips

- Compress images before uploading
- Use WebP format when possible
- Optimize content for fast loading
- Minimize external dependencies

## Template Features

### ✅ Included Features
- Hero image with overlay text
- Article metadata (date, author, read time)
- Rich text content support
- Tags system
- Related articles sidebar
- Share and bookmark buttons
- Newsletter signup
- Responsive design
- Navigation back to news listing

### 🔧 Customizable Elements
- Color scheme
- Typography
- Layout structure
- Sidebar content
- Footer links
- Social sharing options

## Quick Start Example

```typescript
// app/news/example-article/page.tsx
const templateData = {
  id: "example-article",
  date: "January 20, 2024",
  title: "Born International Announces New Investment Strategy",
  subtitle: "Expanding focus on sustainable technology investments",
  author: "Investment Team",
  readTime: "3 min read",
  category: "Investment Strategy",
  image: "/news/20250120/strategy-announcement.jpg",
  content: `
    <p>Born International is pleased to announce a new investment strategy focused on sustainable technology...</p>
    <h2>Strategic Focus Areas</h2>
    <p>Our new strategy will concentrate on three key areas...</p>
  `,
  tags: ["Investment", "Strategy", "Sustainability", "Technology"],
  relatedArticles: []
}
```

## Related Articles Recommendation System

### How Related Articles Are Determined

The system uses a smart recommendation algorithm that considers multiple factors:

#### 1. **Similarity Scoring (Primary Method)**
- **Category Match** (Weight: 5) - Same category gets highest priority
- **Tag Overlap** (Weight: 3) - Articles with similar tags
- **Date Proximity** (Weight: 2) - Recent articles get higher scores
- **Author Match** (Weight: 1) - Same author articles

#### 2. **Fallback Strategy**
If not enough related articles are found by similarity:

1. **Category-based**: Articles in the same category
2. **Tag-based**: Articles sharing common tags
3. **Latest articles**: Most recent articles as final fallback

#### 3. **Example Scoring**
For a "Financial Results" article:
- Other "Financial Results" articles: +5 points
- Articles with "Investment Performance" tag: +3 points
- Articles from same month: +2 points
- Articles by same author: +1 point

### Usage

```typescript
// The system automatically finds related articles
// No manual configuration needed!

const articleData = {
  id: "your-article",
  title: "Your Title",
  category: "Technology", // Used for similarity matching
  tags: ["AI", "Investment", "Innovation"], // Used for tag matching
  // ... other fields
}

// Related articles are automatically generated based on:
// 1. Similarity to current article
// 2. Category matching
// 3. Tag overlap
// 4. Recency
```

### Benefits

- **Automatic**: No need to manually specify related articles
- **Intelligent**: Uses multiple factors for relevance
- **Scalable**: Works with any number of articles
- **Consistent**: Same algorithm across all articles
- **Fallback**: Always shows relevant content

This template provides a solid foundation for creating professional news articles that maintain consistency across the Born International website. 