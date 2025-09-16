import React, { useState } from 'react'

interface CreativeFontSpec {
  id: string
  name: string
  description: string
  cssUrl: string
  previewText: string
}

const FontGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('')
  const [fonts, setFonts] = useState<CreativeFontSpec[]>([])
  const [loading, setLoading] = useState(false)

  const generateFonts = async () => {
    if (!prompt.trim()) return
    
    setLoading(true)
    try {
      // Mock font generation for now
      const mockFonts: CreativeFontSpec[] = [
        {
          id: '1',
          name: 'Creative Sans',
          description: 'A modern sans-serif font with creative elements',
          cssUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
          previewText: prompt
        },
        {
          id: '2', 
          name: 'Artistic Serif',
          description: 'An elegant serif font with artistic flair',
          cssUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap',
          previewText: prompt
        }
      ]
      
      setFonts(mockFonts)
    } catch (error) {
      console.error('Error generating fonts:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
          Fontinity - AI Font Generator
        </h1>
        
        <div className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the font style you want to generate..."
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={generateFonts}
              disabled={loading || !prompt.trim()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating...' : 'Generate Fonts'}
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {fonts.map((font) => (
            <div key={font.id} className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{font.name}</h3>
              <p className="text-muted-foreground mb-4">{font.description}</p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {font.previewText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FontGenerator