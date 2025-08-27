import React from 'react';

// Custom components for MDX rendering
export const MDXComponents = {
  // Custom heading components with better styling
  h1: (props) => (
    <h1 
      className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight" 
      {...props} 
    />
  ),
  h2: (props) => (
    <h2 
      className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4 leading-tight" 
      {...props} 
    />
  ),
  h3: (props) => (
    <h3 
      className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3" 
      {...props} 
    />
  ),
  h4: (props) => (
    <h4 
      className="text-xl font-medium text-gray-700 dark:text-gray-200 mt-4 mb-2" 
      {...props} 
    />
  ),
  
  // Paragraph styling
  p: (props) => (
    <p 
      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300" 
      {...props} 
    />
  ),
  
  // List styling
  ul: (props) => (
    <ul 
      className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2" 
      {...props} 
    />
  ),
  ol: (props) => (
    <ol 
      className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2" 
      {...props} 
    />
  ),
  li: (props) => (
    <li 
      className="ml-4" 
      {...props} 
    />
  ),
  
  // Code blocks
  pre: (props) => (
    <pre 
      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto mb-4 border border-gray-200 dark:border-gray-700" 
      {...props} 
    />
  ),
  code: (props) => {
    // Check if it's an inline code or code block
    const isInline = !props.className;
    
    if (isInline) {
      return (
        <code 
          className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm font-mono" 
          {...props} 
        />
      );
    }
    
    return (
      <code 
        className="text-gray-900 dark:text-gray-100 font-mono text-sm" 
        {...props} 
      />
    );
  },
  
  // Blockquotes
  blockquote: (props) => (
    <blockquote 
      className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600 dark:text-gray-400" 
      {...props} 
    />
  ),
  
  // Links
  a: (props) => (
    <a 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline" 
      target="_blank" 
      rel="noopener noreferrer"
      {...props} 
    />
  ),
  
  // Images
  img: (props) => (
    <img 
      className="rounded-lg shadow-md max-w-full h-auto my-6" 
      loading="lazy"
      {...props} 
    />
  ),
  
  // Tables
  table: (props) => (
    <div className="overflow-x-auto mb-4">
      <table 
        className="min-w-full border border-gray-300 dark:border-gray-600 rounded-lg" 
        {...props} 
      />
    </div>
  ),
  th: (props) => (
    <th 
      className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white" 
      {...props} 
    />
  ),
  td: (props) => (
    <td 
      className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300" 
      {...props} 
    />
  ),
  
  // Horizontal rule
  hr: (props) => (
    <hr 
      className="my-8 border-gray-300 dark:border-gray-600" 
      {...props} 
    />
  ),
  
  // Strong and emphasis
  strong: (props) => (
    <strong 
      className="font-semibold text-gray-900 dark:text-white prose-strong:text-gray-900 dark:prose-strong:text-white" 
      {...props} 
    />
  ),
  em: (props) => (
    <em 
      className="italic text-gray-800 dark:text-gray-200" 
      {...props} 
    />
  )
};