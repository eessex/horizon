class Project < ApplicationRecord
  include JsonbEditable

  belongs_to :organization
  has_many :stages, dependent: :destroy
  has_many :snapshots, dependent: :destroy
  has_many :deploy_blocks
  belongs_to :snapshot, optional: true

  jsonb_editable :tags

  def ordered_stages
    @ordered_stages ||= stages.sort_by(&:position)
  end

  def is_fully_released
    snapshot && severity == 0
  end

  def severity
    scores = compared_stages.to_a.map { |stage| stage[:score] }
    scores.compact.max || 0
  end

  def git_remote
    stage = ordered_stages&.detect{ |s| s.name == "master" }
    stage.git_remote
  end

  # enumerates pairs of stages, the corresponding comparison object, and severity score
  def compared_stages
    @compared_stages ||= ordered_stages.each_cons(2).map do |ahead, behind|
      comparison = snapshot&.comparisons&.detect{ |c| c.behind_stage_id == behind.id && c.ahead_stage_id == ahead.id }
      {
        stages: [ahead, behind],
        snapshot: comparison,
        score: (ComparisonService.comparison_score(comparison) if comparison)
      }
    end
  end
end
