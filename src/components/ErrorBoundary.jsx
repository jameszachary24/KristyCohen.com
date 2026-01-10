import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiRefreshCw, FiHome } = FiIcons;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
    // Bind methods in constructor to ensure compatibility
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset() {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-red-500/30">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiAlertTriangle} className="w-10 h-10 text-red-400" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">Oops! Something Went Wrong</h1>
              
              <p className="text-slate-300 mb-8 text-lg">
                We encountered an unexpected error. Don't worry, our team has been notified.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-slate-900 p-4 rounded-lg mb-8 text-sm">
                  <summary className="cursor-pointer font-semibold mb-2 text-red-400">
                    Error Details (Development Only)
                  </summary>
                  <pre className="text-slate-400 overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleReset}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  <SafeIcon icon={FiHome} className="w-5 h-5" />
                  Go Home
                </button>
                
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-2 bg-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-600 transition-all"
                >
                  <SafeIcon icon={FiRefreshCw} className="w-5 h-5" />
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;