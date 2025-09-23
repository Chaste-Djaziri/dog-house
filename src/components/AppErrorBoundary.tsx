import React from 'react';
import ErrorPage from '../pages/Error';

type Props = React.PropsWithChildren;

type State = {
  hasError: boolean;
  error?: Error;
};

class AppErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Surface the error to the console for debugging/monitoring tools.
    console.error('Unhandled application error', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.assign(window.location.pathname + window.location.search + window.location.hash);
  };

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} onRetry={this.handleRetry} />;
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
