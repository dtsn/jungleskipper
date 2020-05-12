module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, node, context)
      	record.delete(:gallery)
      	record.delete(:parks)
      	record.delete(:members)
      	record
      end
    end
  end
end