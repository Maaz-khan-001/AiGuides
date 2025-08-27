import matter from 'gray-matter';

// Get all MDX files from the content/posts directory
export const getAllPosts = async () => {
  // Get all .mdx files via dynamic loaders
  const modules = import.meta.glob('/content/posts/*.mdx', {
    query: '?raw',
    import: 'default'
  });
  
  const entries = await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      const source = await loader();
      // Parse frontmatter and content
      const { data: frontmatter, content: body } = matter(source);
      
      // Extract slug from filename
      const slug = path.replace('/content/posts/', '').replace('.mdx', '');
      
      return {
        slug,
        frontmatter,
        body,
        ...frontmatter
      };
    })
  );
  
  // Sort by published date (newest first)
  return entries.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

// Get a single post by slug
export const getPostBySlug = async (slug) => {
  try {
    const modules = import.meta.glob('/content/posts/*.mdx', {
      query: '?raw',
      import: 'default'
    });
    const key = `/content/posts/${slug}.mdx`;
    const loader = modules[key];

    if (!loader) {
      console.error(`Post not found: ${slug}`);
      return null;
    }

    const source = await loader();
    const { data: frontmatter, content: body } = matter(source);

    return {
      slug,
      frontmatter,
      body,
      ...frontmatter
    };
  } catch (error) {
    console.error(`Error loading post: ${slug}`, error);
    return null;
  }
};

// Get posts by category
export const getPostsByCategory = async (category = 'All Posts') => {
  const allPosts = await getAllPosts();
  
  if (category === 'All Posts') {
    return allPosts;
  }
  
  return allPosts.filter(post => post.category === category);
};

// Get featured posts
export const getFeaturedPosts = async (limit = 3) => {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
};

// Search posts
export const searchPosts = async (query) => {
  const allPosts = await getAllPosts();
  const searchTerm = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  );
};

// Get all categories
export const getCategories = async () => {
  const allPosts = await getAllPosts();
  const categories = ['All Posts'];
  
  allPosts.forEach(post => {
    if (post.category && !categories.includes(post.category)) {
      categories.push(post.category);
    }
  });
  
  return categories;
};

// Get related posts (same category, excluding current post)
export const getRelatedPosts = async (currentSlug, category, limit = 3) => {
  const allPosts = await getAllPosts();
  
  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};