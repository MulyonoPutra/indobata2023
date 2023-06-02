export type ProductsType = Product[]

export interface Product {
  id: string
  name: string
  description: string
  category: string
  ingredients: string[]
  features: string[]
  applications: string[]
  technicalSpecifications: TechnicalSpecifications
  images: string[]
  stock: number
}

export interface TechnicalSpecifications {
  CompressiveStrength: string
  SettingTime: string
  WaterCementRatio: string
  Density: string
  MaximumAggregateSize: string
  Thickness: string
  AverageWeight: string
  SurfaceFinish: string
  FiberType: string
  FiberContent: string
  Flowability: string
  VOCContent: string
  PatternOptions: string
  ColorOptions: string
  DosageRange: string
  EffectonSettingTime: string
  EffectonStrength: string
  EffectOnAirContent: string
  MaterialOptions: string
  SizeOptions: string
  LoadBearingCapacity: string
  NumberOfReuses: string
  FinishOptions: string
  ApplicationMethod: string
  CuringTime: string
  CoverageArea: string
  RebarSizeOptions: string
  WireMeshOptions: string
  FiberReinforcementTypes: string
  CarbonFiberSheetThickness: string
}
