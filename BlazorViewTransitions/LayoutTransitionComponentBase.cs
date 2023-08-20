using Microsoft.AspNetCore.Components;
using System.ComponentModel;

namespace BlazorViewTransitions;

/// <summary>
/// Optional base class for components that represent a layout.
/// Alternatively, components may implement <see cref="IComponent"/> directly
/// and declare their own parameter named <see cref="Body"/>.
/// </summary>
public abstract class LayoutTransitionComponentBase : TransitionComponentBase
{
    /// <summary>
    /// Gets the content to be rendered inside the layout.
    /// </summary>
    [Parameter]
    public RenderFragment? Body { get; set; }
}