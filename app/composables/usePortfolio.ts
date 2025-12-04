import type { PortfolioData } from '~/types/portfolio'

export const usePortfolio = () => {
  const portfolioData = useState<PortfolioData | null>('portfolioData', () => null)
  const loading = useState('portfolioLoading', () => false)
  const error = useState<Error | null>('portfolioError', () => null)

  const fetchPortfolioData = async () => {
    if (portfolioData.value) return portfolioData.value

    loading.value = true
    error.value = null

    try {
      const response = await fetch('/portfolio_data.json')
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio data')
      }
      const data = await response.json()
      portfolioData.value = data
      return data
    } catch (err) {
      error.value = err as Error
      console.error('Error fetching portfolio data:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  const getProjectsByCategory = (category: string) => {
    if (!portfolioData.value) return []
    if (category === 'all') return portfolioData.value.projects
    return portfolioData.value.projects.filter(
      (project) => project.company.toLowerCase().includes(category.toLowerCase())
    )
  }

  const getFeaturedProjects = (limit: number = 6) => {
    if (!portfolioData.value) return []
    return portfolioData.value.projects.slice(0, limit)
  }

  return {
    portfolioData,
    loading,
    error,
    fetchPortfolioData,
    getProjectsByCategory,
    getFeaturedProjects,
  }
}
