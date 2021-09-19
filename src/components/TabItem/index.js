import './index.css'

const TabItem = props => {
  const {tabItem, onClickTab, isActive} = props
  const {tabId, displayText} = tabItem

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  const tabClassName = isActive
    ? 'tab-button-Active display-text-button'
    : 'display-text-button'

  return (
    <li className="tab-item">
      <button type="button" className={tabClassName} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
