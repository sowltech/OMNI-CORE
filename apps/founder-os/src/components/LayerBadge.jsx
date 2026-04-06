// LayerBadge — small chip showing a layer name

import { LAYERS } from '../data/layers';

export default function LayerBadge({ layerId }) {
  const layer = LAYERS.find((l) => l.id === layerId);
  if (!layer) return null;
  return <span className={`layer-badge layer-${layerId}`}>{layer.label}</span>;
}
